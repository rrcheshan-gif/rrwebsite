const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace("img: '/images/home/SLIDE_01.jpg'", "img: '/images/home/SLIDE_01_Fihladhoo.jpg'");
// Also let's ensure opacity is a bit higher so the detail is retained better, e.g. 0.65 or 0.7
content = content.replace("style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.58 }}", "style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.65 }}");

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Homepage background updated to Fihladhoo image');
