const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace("img: '/images/home/slider/polished/coastal.jpg'", "img: '/images/home/SLIDE_01.jpg'");

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Homepage slide 01 updated');
