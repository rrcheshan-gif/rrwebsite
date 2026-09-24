import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Basic Security: Referer Validation
    const referer = request.headers.get('referer');
    if (!referer || (!referer.includes('rrconstruction.lk') && !referer.includes('localhost'))) {
      return NextResponse.json({ error: 'Unauthorized request origin' }, { status: 403 });
    }

    const body = await request.json();
    if (body.honeypot) return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 }); // Spam bot trap
    const { name, company, email, phone, plant, product, qty, location, message } = body;

    // Use environment variables on Vercel, fallback to provided credentials
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

    const mailOptions = {
      from: user,
      to: to,
      subject: `New Material Quote Request from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 0; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            
            <!-- Header with Logo -->
            <div style="background-color: #111827; padding: 25px 30px; text-align: center; border-bottom: 4px solid #d32f2f;">
                <img src="https://www.rrconstruction.lk/images/logo.png" alt="RR Construction Logo" style="max-height: 70px; margin-bottom: 15px;">
                <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">Material Quote Request</h2>
            </div>

            <!-- Main Content -->
            <div style="padding: 30px;">
                <p style="font-size: 16px; line-height: 1.6; color: #4b5563; margin-top: 0; margin-bottom: 25px;">
                    A new material quote request has been submitted via the RR Construction website. Please find the details below:
                </p>

                <!-- Contact Information -->
                <h3 style="color: #111827; margin-top: 0; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Contact Information</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 35%; color: #6b7280; font-weight: 500;"><strong>Name:</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">\${name || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;"><strong>Company:</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">\${company || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;"><strong>Email:</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #d32f2f;"><a href="mailto:\${email}" style="color: #d32f2f; text-decoration: none;">\${email || 'N/A'}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;"><strong>Phone:</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">\${phone || 'N/A'}</td>
                    </tr>
                </table>

                <!-- Quote Details -->
                <h3 style="color: #111827; margin-top: 0; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Requirement Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 35%; color: #6b7280; font-weight: 500;"><strong>Material Required:</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">\${product || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;"><strong>Preferred Plant:</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">\${plant || 'Any'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;"><strong>Required Quantity:</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">\${qty || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 500;"><strong>Delivery Location:</strong></td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">\${location || 'N/A'}</td>
                    </tr>
                </table>

                <!-- Additional Message -->
                <h3 style="color: #111827; margin-top: 0; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">Additional Message</h3>
                <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #d32f2f; color: #4b5563; font-style: italic; line-height: 1.6; margin-bottom: 10px;">
                    \${message ? message.replace(/\\n/g, '<br>') : 'No additional message provided.'}
                </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 13px;">This is an automated email sent from the RR Construction website.</p>
                <p style="margin: 5px 0 0; color: #9ca3af; font-size: 12px;">&copy; \${new Date().getFullYear()} RR Construction (Pvt) Ltd. All Rights Reserved.</p>
            </div>
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
