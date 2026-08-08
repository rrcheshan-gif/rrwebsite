import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    
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
    // To make this work, you need to add these variables to your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions: any = {
      from: `"RR Construction Careers" <${process.env.SMTP_USER}>`,
      to: 'heshan@rrconstruction.lk', // The requested recipient
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
