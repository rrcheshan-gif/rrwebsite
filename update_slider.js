const fs = require('fs');

let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(
  /img:\s*'\/images\/home\/slider-maritime-gandara\.jpeg'/,
  "img: '/images/home/slider-maritime-fihladhoo.jpg'"
);

fs.writeFileSync('src/app/page.tsx', c, 'utf8');
console.log("Updated slider maritime image to fihladhoo");
