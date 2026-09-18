const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Expand the width and height of the slider container
content = content.replace(
  "width: '100%', maxWidth: '1440px', height: 'clamp(500px, 75vh, 800px)'",
  "width: 'calc(100% - 40px)', maxWidth: '1800px', height: 'clamp(650px, 85vh, 950px)'"
);

// 2. Adjust internal content to not push buttons to the bottom
content = content.replace(
  "maxWidth: '900px', paddingTop: '60px', margin: '0 auto'",
  "maxWidth: '900px', margin: '0 auto'"
);

// Also remove the explicit paddingTop from the container inner wrapper if there's any other
content = content.replace(
  "style={{ padding: '20px', paddingTop: '150px'",
  "style={{ padding: '0', paddingTop: '130px', paddingBottom: '30px'"
); // Removing the 20px padding because width is calc(100% - 40px) which handles the horizontal gap

fs.writeFileSync(file, content, 'utf8');
console.log('Updated hero size');
