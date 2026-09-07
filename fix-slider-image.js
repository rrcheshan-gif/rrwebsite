const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The current image tag looks like:
// img: '/images/home/SLIDE_01_NEW.jpg',

content = content.replace(
  /img: '\/images\/home\/SLIDE_01_NEW\.jpg'/g,
  "img: '/images/home/SLIDE_01_NOTEXT.jpg'"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated slider image path to SLIDE_01_NOTEXT.jpg');
