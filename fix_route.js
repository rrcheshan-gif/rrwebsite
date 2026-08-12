const fs = require('fs');
let file = 'src/app/api/apply/route.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
    /port: Number\(process.env.SMTP_PORT\) \|\| 465,[\s\S]*?secure: true, \/\/ true for 465, false for other ports/,
    `port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587 (Outlook)`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Updated route.ts for Outlook support");
