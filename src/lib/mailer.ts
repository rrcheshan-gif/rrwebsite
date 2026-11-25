import nodemailer from 'nodemailer';

export interface EmailPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  html?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType?: string;
  }>;
}

export async function sendNotificationEmail(payload: EmailPayload): Promise<{ success: boolean; method: string; message?: string }> {
  const host = process.env.SMTP_HOST || 'smtp.office365.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER || 'sysadmin@rrconstruction.lk';
  const pass = process.env.SMTP_PASS || '';
  const to = process.env.SMTP_TO || 'heshan@rrconstruction.lk, general@rrconstruction.lk';

  const defaultHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 0; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background-color: #111827; padding: 25px 30px; text-align: center; border-bottom: 4px solid #d32f2f;">
            <img src="https://www.rrconstruction.lk/images/logo.png" alt="RR Construction Logo" style="max-height: 70px; margin-bottom: 15px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">${payload.subject}</h2>
        </div>
        <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 35%; color: #6b7280;"><strong>Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #111;">${payload.name}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${payload.email}" style="color: #d32f2f; text-decoration: none;">${payload.email}</a></td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;"><strong>Phone:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111;">${payload.phone || 'N/A'}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;"><strong>Subject:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #111;">${payload.subject}</td></tr>
            </table>
            <h3 style="color: #111; margin-top: 20px; font-size: 16px;">Message Content:</h3>
            <p style="background: #f9fafb; padding: 18px; border-radius: 8px; border-left: 4px solid #d32f2f; white-space: pre-wrap; font-size: 15px; line-height: 1.6; color: #374151;">${payload.message}</p>
        </div>
    </div>
  `;

  // 1. Try Primary SMTP
  let smtpRef = pass ? 'SMTP' : 'NO_PASSWORD';
  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 5000, // 5s timeout to prevent long delays
    });

    const mailOptions: any = {
      from: `"RR Construction Website" <${user}>`,
      to,
      replyTo: payload.email,
      subject: `[RR Website] ${payload.subject} - from ${payload.name}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || 'N/A'}\nSubject: ${payload.subject}\n\nMessage:\n${payload.message}`,
      html: payload.html || defaultHtml,
    };

    if (payload.attachments && payload.attachments.length > 0) {
      mailOptions.attachments = payload.attachments;
    }

    await transporter.sendMail(mailOptions);
    console.log('[Mailer] Successfully delivered via primary SMTP to:', to);
    return { success: true, method: 'smtp' };
  } catch (smtpError: any) {
    smtpRef = [smtpError.code, smtpError.responseCode].filter(Boolean).join('-') || 'SMTP_ERROR';
    console.warn('[Mailer] Primary SMTP failed:', smtpError.message);
    console.log('[Mailer] Initiating automatic fallback delivery to ensure email is not lost...');
  }

  // 2. Automatic Fallback Delivery via FormSubmit
  const recipients = ['heshan@rrconstruction.lk', 'general@rrconstruction.lk'];
  let fallbackDelivered = false;

  for (const recipient of recipients) {
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://www.rrconstruction.lk',
          'Referer': 'https://www.rrconstruction.lk/contact',
        },
        body: JSON.stringify({
          _subject: `[Website Inquiry] ${payload.subject} - from ${payload.name}`,
          Name: payload.name,
          Email: payload.email,
          Phone: payload.phone || 'N/A',
          Subject: payload.subject,
          Message: payload.message,
          _replyto: payload.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        fallbackDelivered = true;
        console.log(`[Mailer] Fallback delivered to ${recipient}:`, data);
      }
    } catch (fbErr: any) {
      console.error(`[Mailer] Fallback to ${recipient} error:`, fbErr.message);
    }
  }

  // 3. Fallback Logging (Guarantees zero lost customer inquiries)
  console.log('[Mailer] ================== RECORDED WEBSITE INQUIRY ==================');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Name:', payload.name);
  console.log('Email:', payload.email);
  console.log('Phone:', payload.phone || 'N/A');
  console.log('Subject:', payload.subject);
  console.log('Message:', payload.message);
  console.log('[Mailer] ===============================================================');

  if (!fallbackDelivered) {
    throw new Error(
      'We could not deliver your message right now. Please email us directly at general@rrconstruction.lk or call us. (ref: ' + smtpRef + ')'
    );
  }

  return {
    success: true,
    method: 'fallback-delivered',
    message: 'Message processed and notification dispatched successfully',
  };
}
