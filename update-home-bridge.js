const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace("img: '/images/home/slider/polished/bridge.jpg',", "img: '/images/home/bridge_mahanama.jpeg',");

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Homepage bridge slide updated');
