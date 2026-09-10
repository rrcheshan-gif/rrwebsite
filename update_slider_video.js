const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(
  "video: '/videos/home-slider.mp4',",
  "video: '/videos/home-slider-new.mp4',"
);

c = c.replace(
  "filter: 'brightness(1.05) contrast(1.05)'",
  "filter: 'brightness(1.08) contrast(1.1) saturate(1.1)'"
);

fs.writeFileSync('src/app/page.tsx', c, 'utf8');
console.log("Updated slider video and enhanced filters.");
