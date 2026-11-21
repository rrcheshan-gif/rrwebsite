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
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 }); // Spam bot trap
    }

    const { name, email, phone, subject, message, captchaAnswer, captchaExpected } = body;

    // Validate CAPTCHA
    if (
      captchaAnswer === undefined ||
      captchaExpected === undefined ||
      String(captchaAnswer).trim() === '' ||
      parseInt(String(captchaAnswer), 10) !== parseInt(String(captchaExpected), 10)
    ) {
      return NextResponse.json({ error: 'Invalid or missing CAPTCHA value. Please solve the math verification.' }, { status: 400 });
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
