const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const regex = /id:\s*'project-12',[\s\S]*?images:\s*\[[\s\S]*?\]/;
const replacement = `id: 'project-12',
      type: 'ongoing',
      category: "irrigation",
      title: "Ongoing Irrigation & Water Supply Project",
      client: "Confidential",
      duration: "Ongoing",
      year: 2025,
      status: "Ongoing",
      heroImage: '/images/projects/ongoing/irrigation/ktp-1.jpeg',
      images: [
        'images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28.jpeg',
        'images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28 (1).jpeg',
        'images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.33.jpeg',
        'images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.55.jpeg',
        '/images/projects/ongoing/irrigation/ktp-1.jpeg',
        '/images/projects/ongoing/irrigation/ktp-2.jpeg',
        '/images/projects/ongoing/irrigation/ktp-3.jpeg',
        '/images/projects/ongoing/irrigation/ktp-4.jpeg',
        '/images/projects/ongoing/irrigation/ktp-5.jpeg'
      ]`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log("Updated data.js");
