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
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 }); // Spam bot trap
    }

    const { name, company, email, phone, plant, product, qty, location, message, captchaAnswer, captchaExpected } = body;

    // Validate CAPTCHA
    if (
      captchaAnswer === undefined ||
      captchaExpected === undefined ||
      String(captchaAnswer).trim() === '' ||
      parseInt(String(captchaAnswer), 10) !== parseInt(String(captchaExpected), 10)
    ) {
      return NextResponse.json({ error: 'Invalid or missing CAPTCHA value. Please solve the math verification.' }, { status: 400 });
    }

    const quoteDetailsHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 0; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="background-color: #111827; padding: 25px 30px; text-align: center; border-bottom: 4px solid #d32f2f;">
              <img src="https://www.rrconstruction.lk/images/logo.png" alt="RR Construction Logo" style="max-height: 70px; margin-bottom: 15px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">New Material Quote Request</h2>
          </div>
          <div style="padding: 30px;">
              <h3 style="color: #111827; margin-top: 0; margin-bottom: 15px; font-size: 16px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; width: 35%; color: #6b7280;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111;">${name || 'N/A'}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111;">${company || 'N/A'}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #d32f2f;">${email || 'N/A'}</a></td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111;">${phone || 'N/A'}</td></tr>
              </table>

              <h3 style="color: #111827; margin-top: 0; margin-bottom: 15px; font-size: 16px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Order & Material Specifications</h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; width: 35%; color: #6b7280;"><strong>Plant Location:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #d32f2f;">${plant || 'N/A'}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Material Required:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111;">${product || 'N/A'}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Required Quantity:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111;">${qty || 'N/A'}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280;"><strong>Delivery Site:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111;">${location || 'N/A'}</td></tr>
              </table>

              <h3 style="color: #111827; margin-top: 0; margin-bottom: 10px; font-size: 16px;">Additional Instructions:</h3>
              <p style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #d32f2f; white-space: pre-wrap; font-size: 14px; color: #374151;">${message || 'No additional instructions provided.'}</p>
          </div>
      </div>
    `;

    const summaryText = `
Name: ${name || 'N/A'}
Company: ${company || 'N/A'}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}
Plant: ${plant || 'N/A'}
Material: ${product || 'N/A'}
Quantity: ${qty || 'N/A'}
Delivery Location: ${location || 'N/A'}

Additional Message:
${message || 'None'}
    `;

    const result = await sendNotificationEmail({
      name: name || 'Quote Requester',
      email: email || 'sales@rrconstruction.lk',
      phone: phone || 'N/A',
      subject: `New Material Quote Request: ${product || 'Materials'} - from ${name || 'Customer'}`,
      message: summaryText,
      html: quoteDetailsHtml,
    });

    return NextResponse.json({ success: true, message: 'Quote request sent successfully', method: result.method }, { status: 200 });
  } catch (error: any) {
    console.error('Quote email sending error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Failed to send quote request' }, { status: 500 });
  }
}
