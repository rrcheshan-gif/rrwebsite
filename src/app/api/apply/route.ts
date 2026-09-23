import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Basic Security: Referer Validation
    const referer = request.headers.get('referer');
    if (!referer || (!referer.includes('rrconstruction.lk') && !referer.includes('localhost'))) {
      return NextResponse.json({ error: 'Unauthorized request origin' }, { status: 403 });
    }

    const data = await request.formData();
    
    const honeypot = data.get('honeypot');
    if (honeypot) return NextResponse.json({ success: true, message: 'Application submitted successfully' }, { status: 200 }); // Spam bot trap
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const position = data.get('position') as string;
    const file = data.get('file') as File;

    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const host = process.env.SMTP_HOST || 'smtp.office365.com';
    const user = process.env.SMTP_USER || 'sysadmin@rrconstruction.lk';
    const pass = process.env.SMTP_PASS || '0715719676@#Bcg';
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

    const mailOptions: any = {
      from: `"RR Construction Careers" <${user}>`,
      to: to, // The requested recipient
      replyTo: email,
      subject: `New Job Application: ${name} for ${position}`,
      text: `
You have received a new job application.

Name: ${name}
Email: ${email}
Phone: ${phone}
Position Applied For: ${position}

Please find the applicant's CV attached to this email.
      `,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <br/>
        <p>Please find the applicant's CV attached.</p>
      `,
    };

    // If a file was uploaded, attach it
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      mailOptions.attachments = [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        }
      ];
    }

    // Attempt to send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending application email:', error);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again later.' },
      { status: 500 }
    );
  }
}
