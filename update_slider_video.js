const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace GFH.mp4 with home-slider.mp4
content = content.replace(/\/videos\/GFH\.mp4/g, "/videos/home-slider.mp4");

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log("Updated video path in page.tsx to use home-slider.mp4");
