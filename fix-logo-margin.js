const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

// Find the global override for .logo and remove margin-left
content = content.replace(
  /margin-left:\s*clamp\(20px,\s*4vw,\s*60px\)\s*!important;/g,
  "margin-left: 0 !important;"
);

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log('Removed left margin from logo');
