const fs = require('fs');
const file = 'src/app/api/apply/route.ts';
let content = fs.readFileSync(file, 'utf8');

const oldTransporter = `    // Configure nodemailer transporter
    // To make this work, you need to add these variables to your .env.local file
    const port = Number(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions: any = {
      from: \`"RR Construction Careers" <\${process.env.SMTP_USER}>\`,
      to: 'heshan@rrconstruction.lk', // The requested recipient`;

const newTransporter = `    // Configure nodemailer transporter
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

    const mailOptions: any = {
      from: \`"RR Construction Careers" <\${user}>\`,
      to: to, // The requested recipient`;

content = content.replace(oldTransporter, newTransporter);

// If there's carriage returns
if (content.indexOf("const user = process.env.SMTP_USER || 'sysadmin@rrconstruction.lk';") === -1) {
  content = content.replace(/ \/\/ Configure nodemailer transporter[\s\S]*?to: 'heshan@rrconstruction\.lk', \/\/ The requested recipient/, newTransporter);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Updated SMTP credentials for job application API');
