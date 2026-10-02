const fs = require('fs');
let content = fs.readFileSync('src/app/projects/ongoing/page.tsx', 'utf8');

const regex = /\{ id: 'irrigation', title: 'Irrigation & Water Supply', img: '[^']+' \}/;
const replacement = "{ id: 'irrigation', title: 'Irrigation & Water Supply', img: '/images/projects/ongoing/irrigation/ktp-1.jpeg' }";

content = content.replace(regex, replacement);
fs.writeFileSync('src/app/projects/ongoing/page.tsx', content, 'utf8');
console.log("Updated ongoing/page.tsx");
