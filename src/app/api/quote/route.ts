import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, plant, product, qty, location, message } = body;

    // Use environment variables on Vercel, fallback to provided credentials
    const host = process.env.SMTP_HOST || 'smtp.office365.com';
    const user = process.env.SMTP_USER || 'sysadmin@rrconstruction.lk';
    const pass = process.env.SMTP_PASS || '0715719676@Bcg';
    const to = process.env.SMTP_TO || 'heshan@rrconstruction.lk';

    const transporter = nodemailer.createTransport({
      host: host,
      port: 587,
      secure: false, // TLS requires secure: false for port 587
      auth: {
        user: user,
        pass: pass,
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    const mailOptions = {
      from: user,
      to: to,
      subject: `New Material Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #d32f2f; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Material Quote Request</h2>
            
            <h3 style="color: #555; margin-top: 20px;">Contact Information:</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || 'N/A'}</td></tr>
            </table>

            <h3 style="color: #555; margin-top: 20px;">Quote Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Material Required:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${product || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Preferred Plant:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${plant || 'Any'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Required Quantity:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${qty || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Delivery Location:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${location || 'N/A'}</td></tr>
            </table>

            <h3 style="color: #555; margin-top: 20px;">Additional Message:</h3>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #d32f2f;">
                ${message ? message.replace(/\n/g, '<br>') : 'No additional message provided.'}
            </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Quote request sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Quote email sending error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
