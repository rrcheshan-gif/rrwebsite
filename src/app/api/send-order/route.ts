import { NextResponse } from 'next/server';
import { verifyHuman } from '@/lib/captcha';
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

    const humanError = await verifyHuman(request, recaptchaToken);
    if (humanError) {
      return NextResponse.json({ error: humanError.message }, { status: humanError.status });
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
