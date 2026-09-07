const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace("img: '/images/home/slider/polished/maritime.jpg'", "img: '/images/home/maritime_wellamankara.jpg'");

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Homepage maritime slide updated');
