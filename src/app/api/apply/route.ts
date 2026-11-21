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

    const data = await request.formData();

    const honeypot = (data.get('honeypot') as string) || (data.get('website_hp') as string);
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Application submitted successfully' }, { status: 200 }); // Spam bot trap
    }

    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const position = data.get('position') as string;
    const file = data.get('file') as File;
    const captchaAnswer = data.get('captchaAnswer') as string;
    const captchaExpected = data.get('captchaExpected') as string;
    const recaptchaToken = (data.get('g-recaptcha-response') as string) || (data.get('recaptchaToken') as string);

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
      const hasValidMath = captchaAnswer && captchaExpected && captchaAnswer.trim() !== '' && parseInt(captchaAnswer, 10) === parseInt(captchaExpected, 10);
      if (!hasValidToken && !hasValidMath) {
        return NextResponse.json({ error: 'Please verify that you are not a robot (reCAPTCHA).' }, { status: 400 });
      }
    }

    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields: Name, Email, Phone, and Position are required.' },
        { status: 400 }
      );
    }

    // Attach CV file if provided
    const attachments = [];
    if (file && typeof file.arrayBuffer === 'function') {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name || 'Resume.pdf',
        content: buffer,
        contentType: file.type || 'application/pdf',
      });
    }

    const careerHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 0; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="background-color: #111827; padding: 25px 30px; text-align: center; border-bottom: 4px solid #d32f2f;">
              <img src="https://www.rrconstruction.lk/images/logo.png" alt="RR Construction Logo" style="max-height: 70px; margin-bottom: 15px;">
              <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">New Career Application</h2>
          </div>
          <div style="padding: 30px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 35%; color: #6b7280;"><strong>Candidate Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #111;">${name}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;"><strong>Position Applied For:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #d32f2f;">${position}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;"><strong>Email Address:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #d32f2f;">${email}</a></td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;"><strong>Phone Number:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111;">${phone}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;"><strong>Attached Resume:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111;">${file ? file.name : 'None'}</td></tr>
              </table>
          </div>
      </div>
    `;

    const summaryText = `
New Job Application:
Name: ${name}
Position: ${position}
Email: ${email}
Phone: ${phone}
CV Attached: ${file ? file.name : 'None'}
    `;

    const result = await sendNotificationEmail({
      name,
      email,
      phone,
      subject: `New Job Application: ${position} - from ${name}`,
      message: summaryText,
      html: careerHtml,
      attachments,
    });

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully', method: result.method },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending job application email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send application. Please try again later.' },
      { status: 500 }
    );
  }
}
