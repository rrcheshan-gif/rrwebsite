import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || 'smtp.office365.com';
    const user = process.env.SMTP_USER || 'sysadmin@rrconstruction.lk';
    const pass = process.env.SMTP_PASS || '0715719676@#Bcg';
    const to = process.env.SMTP_TO || 'heshan@rrconstruction.lk';

    const transporter = nodemailer.createTransport({
      host: host,
      port: 587,
      secure: false, // TLS
      auth: {
        user: user,
        pass: pass,
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    const mailOptions = {
      from: `"RR Construction Contact Form" <${user}>`,
      to: to,
      replyTo: email,
      subject: `New Inquiry: ${subject || 'General'} - from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject || 'General Inquiry'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #d32f2f; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Message</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 30%;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || 'N/A'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${subject || 'General Inquiry'}</td></tr>
            </table>

            <h3 style="color: #555; margin-top: 20px;">Message Details:</h3>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #d32f2f; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
