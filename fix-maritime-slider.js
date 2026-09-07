const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  'img: \'/images/home/maritime_wellamankara.jpg\'',
  'img: \'/images/home/slider-maritime-fihladhoo.jpg\''
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Replaced maritime slider image');
