const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Remove the poster attribute from the video tag
c = c.replace('poster={slide.img} \n                    autoPlay', 'autoPlay');
c = c.replace('poster={slide.img}\n                    autoPlay', 'autoPlay');

// Also remove the old composite image from slide 0 (SLIDE_01_NOTEXT-enhanced.jpg)
// and replace with a cleaner single image that wont flash
c = c.replace(
  "img: '/images/home/SLIDE_01_NOTEXT-enhanced.jpg',",
  "img: '/images/home/slider-maritime-gandara.jpeg',"
);

fs.writeFileSync('src/app/page.tsx', c, 'utf8');
console.log("Removed poster and replaced fallback image");
