const fs = require('fs');

let content = fs.readFileSync('src/app/people/page.tsx', 'utf8');

// Replace 3.5rem with clamp
content = content.replace(/fontSize: "3\.5rem"/g, 'fontSize: "clamp(2.5rem, 8vw, 3.5rem)"');

// Replace 2.5rem with clamp
content = content.replace(/fontSize: "2\.5rem"/g, 'fontSize: "clamp(1.8rem, 5vw, 2.5rem)"');

// Replace 3rem with clamp
content = content.replace(/fontSize: "3rem"/g, 'fontSize: "clamp(2rem, 6vw, 3rem)"');

// Also update the section paddings to be slightly more responsive by using clamp if we want, but padding: "60px 20px" is fine.

fs.writeFileSync('src/app/people/page.tsx', content, 'utf8');
console.log('Updated people page mobile responsiveness');
