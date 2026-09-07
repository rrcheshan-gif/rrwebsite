const fs = require('fs');
let content = fs.readFileSync('src/app/projects/page.tsx', 'utf8');
content = content.replace(/fontSize: "3\.5rem"/g, 'fontSize: "clamp(2.5rem, 8vw, 3.5rem)"');
content = content.replace(/fontSize: "2rem"/g, 'fontSize: "clamp(1.5rem, 5vw, 2rem)"');
content = content.replace(/fontSize: "1\.8rem"/g, 'fontSize: "clamp(1.4rem, 4vw, 1.8rem)"');
fs.writeFileSync('src/app/projects/page.tsx', content, 'utf8');
console.log('Updated projects page mobile responsiveness');
