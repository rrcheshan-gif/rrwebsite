const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The bridge slide
content = content.replace(
  /img:\s*'\/images\/home\/bridge_mahanama-enhanced\.jpeg'/,
  "img: '/images/home/slider-bridge-new.jpg'"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Replaced bridge slide image');
