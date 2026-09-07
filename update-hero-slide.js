const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /img: '\/images\/home\/engineering_hero_composite.jpg'/g,
  "img: '/images/home/SLIDE_01_NEW.jpg'"
);
// Also just in case the old Fihladhoo is somehow there
content = content.replace(
  /img: '\/images\/home\/SLIDE_01_Fihladhoo.jpg'/g,
  "img: '/images/home/SLIDE_01_NEW.jpg'"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated first slide image to SLIDE_01_NEW.jpg');
