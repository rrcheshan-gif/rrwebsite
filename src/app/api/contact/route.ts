import { NextResponse } from 'next/server';
import { sendNotificationEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    // Referer & Origin validation (flexible for custom domain, preview, localhost)
    const referer = request.headers.get('referer') || '';
    const origin = request.headers.get('origin') || '';
    const isAllowed =
      !referer && !origin
      || referer.includes('rrconstruction.lk')
      || referer.includes('localhost')
      || referer.includes('127.0.0.1')
      || referer.includes('vercel.app')
      || origin.includes('rrconstruction.lk')
      || origin.includes('localhost')
      || origin.includes('127.0.0.1')
      || origin.includes('vercel.app');

    if (!isAllowed) {
      return NextResponse.json({ error: 'Unauthorized request origin' }, { status: 403 });
    }

    const body = await request.json();
    if (body.honeypot || body.website_hp) {
      return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 }); // Spam bot trap
    }

    const { name, email, phone, subject, message, captchaAnswer, captchaExpected } = body;
    const recaptchaToken = body['g-recaptcha-response'] || body.recaptchaToken;

    // Verify Google reCAPTCHA
    if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
      try {
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${encodeURIComponent(process.env.RECAPTCHA_SECRET_KEY)}&response=${encodeURIComponent(recaptchaToken)}`,
        });
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return NextResponse.json({ error: 'Google reCAPTCHA verification failed. Please try again.' }, { status: 400 });
        }
      } catch (err) {
        console.warn('reCAPTCHA verification error:', err);
      }
    } else {
      const hasValidToken = typeof recaptchaToken === 'string' && recaptchaToken.length > 5;
      const hasValidMath = captchaAnswer !== undefined && captchaExpected !== undefined && String(captchaAnswer).trim() !== '' && parseInt(String(captchaAnswer), 10) === parseInt(String(captchaExpected), 10);
      if (!hasValidToken && !hasValidMath) {
        return NextResponse.json({ error: 'Please verify that you are not a robot (reCAPTCHA).' }, { status: 400 });
      }
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: Name, Email, and Message are required.' },
        { status: 400 }
      );
    }

    const result = await sendNotificationEmail({
      name,
      email,
      phone: phone || 'N/A',
      subject: subject || 'General Inquiry',
      message,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', method: result.method },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
