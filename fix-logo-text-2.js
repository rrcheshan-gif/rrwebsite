const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

// Replace .logo-text, .footer-logo-text block
content = content.replace(
  /transform: translateY\(-5px\) !important;/,
  `transform: translateY(-6px) !important;`
);

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log('Adjusted translateY to logo text');
