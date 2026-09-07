const fs = require('fs');
let content = fs.readFileSync('src/app/about/awards/page.tsx', 'utf8');
content = content.replace("url('/images/Background.jpeg')", "url('/images/page-headers/awards-recognition.jpg')");
fs.writeFileSync('src/app/about/awards/page.tsx', content, 'utf8');
