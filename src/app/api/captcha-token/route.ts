import { NextResponse } from 'next/server';
import { issueCaptchaToken } from '@/lib/captcha';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(
    { token: issueCaptchaToken() },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
