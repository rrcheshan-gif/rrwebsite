const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /img: '\/images\/home\/hero-collage\.jpg',/,
  "img: '/images/home/hero-single.jpg',"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated first slide image');
