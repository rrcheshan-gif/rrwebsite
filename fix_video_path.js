const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');
content = content.replace(/\/VIDEOS\/GFH\.mp4/g, "/videos/GFH.mp4");
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log("Updated video path in page.tsx");
