import { NextResponse } from 'next/server';
import { sendNotificationEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    // Referer & Origin validation
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
      return NextResponse.json({ success: true, message: 'Order submitted successfully' }, { status: 200 }); // Spam bot trap
    }

    const { name, company, email, phone, plant, product, qty, location, message, captchaAnswer, captchaExpected } = body;
    const recaptchaToken = body['g-recaptcha-response'] || body.recaptchaToken;

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
      if (!hasValidToken && !hasValidMath && (captchaAnswer !== undefined || recaptchaToken !== undefined)) {
        return NextResponse.json({ error: 'Invalid CAPTCHA verification' }, { status: 400 });
      }
    }

    const summaryText = `
New Material Order Request:
Name: ${name || 'N/A'}
Company: ${company || 'N/A'}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}
Plant: ${plant || 'N/A'}
Product: ${product || 'N/A'}
Quantity: ${qty || 'N/A'}
Location: ${location || 'N/A'}
Message: ${message || 'None'}
    `;

    const result = await sendNotificationEmail({
      name: name || 'Order Requester',
      email: email || 'orders@rrconstruction.lk',
      phone: phone || 'N/A',
      subject: `New Aggregates Order Request: ${product || 'Material'} from ${name || 'Customer'}`,
      message: summaryText,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully', method: result.method }, { status: 200 });
  } catch (error: any) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to send order' }, { status: 500 });
  }
}
