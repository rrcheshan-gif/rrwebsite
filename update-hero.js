const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /img: '\/images\/home\/SLIDE_01_Fihladhoo.jpg'/g,
  "img: '/images/home/engineering_hero_composite.jpg'"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated first slide image to the composite collage');
