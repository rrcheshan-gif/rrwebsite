const fs = require('fs');
let content = fs.readFileSync('src/app/projects/ongoing/[category]/page.tsx', 'utf8');

const replacement = `'irrigation': { 
      title: 'Irrigation & Water Supply', 
      img: '/images/projects/ongoing/irrigation/ktp-1.jpeg',
      gallery: [
        '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28 (1).jpeg',
        '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28.jpeg',
        '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.33.jpeg',
        '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.55.jpeg',
        '/images/projects/ongoing/irrigation/ktp-1.jpeg',
        '/images/projects/ongoing/irrigation/ktp-2.jpeg',
        '/images/projects/ongoing/irrigation/ktp-3.jpeg',
        '/images/projects/ongoing/irrigation/ktp-4.jpeg',
        '/images/projects/ongoing/irrigation/ktp-5.jpeg'
      ]
    }`;

const regex = /'irrigation':\s*\{\s*title:\s*'Irrigation & Water Supply',\s*img:\s*'[^']+',\s*gallery:\s*\[[\s\S]*?\]\s*\}/;
content = content.replace(regex, replacement);

fs.writeFileSync('src/app/projects/ongoing/[category]/page.tsx', content, 'utf8');
console.log("Updated [category]/page.tsx");
