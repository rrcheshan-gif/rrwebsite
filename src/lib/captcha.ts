import crypto from 'crypto';

/**
 * Human verification for all email-sending forms.
 *
 * 1. If Google reCAPTCHA keys are configured (RECAPTCHA_SECRET_KEY), the token is verified with Google.
 * 2. Otherwise a server-signed, expiring, single-use token (issued by /api/captcha-token) is required.
 * 3. Per-IP rate limiting protects every email endpoint from flooding.
 */

const MIN_AGE_MS = 2_000; // a human cannot tick the box and submit faster than this
const MAX_AGE_MS = 30 * 60_000; // token expires after 30 minutes

function getSecret(): string {
  return (
    process.env.CAPTCHA_SECRET ||
    process.env.SMTP_PASS ||
    process.env.RECAPTCHA_SECRET_KEY ||
    'rr-construction-default-captcha-secret'
  );
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', getSecret()).update(payload).digest('hex');
}

export function issueCaptchaToken(): string {
  const ts = Date.now();
  const nonce = crypto.randomBytes(12).toString('hex');
  const payload = `${ts}.${nonce}`;
  return `rrc.${payload}.${sign(payload)}`;
}

// Single-use tracking (best effort per server instance)
const usedNonces = new Map<string, number>();
function rememberNonce(nonce: string) {
  const now = Date.now();
  for (const [k, t] of usedNonces) if (now - t > MAX_AGE_MS) usedNonces.delete(k);
  usedNonces.set(nonce, now);
}

function verifyOwnToken(token: string): boolean {
  const parts = token.split('.');
  if (parts.length !== 4 || parts[0] !== 'rrc') return false;
  const [, ts, nonce, sig] = parts;
  const expected = sign(`${ts}.${nonce}`);
  if (sig.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  const age = Date.now() - Number(ts);
  if (!(age >= MIN_AGE_MS && age <= MAX_AGE_MS)) return false;
  if (usedNonces.has(nonce)) return false;
  rememberNonce(nonce);
  return true;
}

// ---- Rate limiting ----
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60_000;
const MAX_HITS = 8;

export function getClientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

export function isRateLimited(request: Request): boolean {
  const ip = getClientIp(request);
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);
  }
  return list.length > MAX_HITS;
}

export async function verifyHuman(
  request: Request,
  token: unknown
): Promise<{ status: number; message: string } | null> {
  if (isRateLimited(request)) {
    return { status: 429, message: 'Too many requests. Please try again in a few minutes.' };
  }

  const t = typeof token === 'string' ? token : '';
  if (!t) {
    return { status: 400, message: 'Please verify that you are not a robot.' };
  }

  // Our own signed token
  if (t.startsWith('rrc.')) {
    return verifyOwnToken(t)
      ? null
      : { status: 400, message: 'Verification expired or invalid. Please tick "I\'m not a robot" again.' };
  }

  // Official Google reCAPTCHA token
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (secret) {
    try {
      const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(t)}`,
      });
      const data = await res.json();
      if (data.success) return null;
    } catch (err) {
      console.warn('[captcha] Google verification error:', err);
    }
  }

  return { status: 400, message: 'Verification failed. Please tick "I\'m not a robot" again.' };
}
