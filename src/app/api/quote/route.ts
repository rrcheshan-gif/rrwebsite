import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real production app, configure these in .env.local
    // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "test@example.com",
        pass: process.env.SMTP_PASS || "password123",
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || "test@example.com",
      to: process.env.CONTACT_EMAIL || "sales@rrconstruction.lk", // The email receiving the quotes
      subject: `New Material Quote Request from ${data.name}`,
      html: `
        <h2>New Material Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Material Required:</strong> ${data.product}</p>
        <p><strong>Preferred Plant:</strong> ${data.plant || 'Any'}</p>
        <p><strong>Quantity:</strong> ${data.qty}</p>
        <p><strong>Delivery Location:</strong> ${data.location}</p>
        <br/>
        <p><strong>Additional Message:</strong></p>
        <p>${data.message || 'None'}</p>
      `,
    };

    // Only attempt to send if env vars are configured, otherwise just return success for frontend simulation
    if (process.env.SMTP_USER && process.env.SMTP_USER !== "test@example.com") {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Mock Email Sent (Configure SMTP in .env.local to send real emails):", mailOptions);
    }

    return NextResponse.json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error sending quote email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send quote request' }, { status: 500 });
  }
}
