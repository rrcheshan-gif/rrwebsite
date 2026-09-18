const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The highway slide
content = content.replace(
  /img:\s*'\/images\/home\/slider\/polished\/road-enhanced\.jpg'/,
  "img: '/images/home/slider-highway-new.jpg'"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Replaced highway slide image');
