const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  "background: 'linear-gradient(180deg, rgba(5, 10, 25, 0.65) 0%, rgba(0, 0, 0, 0.45) 45%, rgba(5, 10, 25, 0.8) 100%)'",
  "background: 'linear-gradient(180deg, rgba(5, 10, 25, 0.55) 0%, rgba(0, 0, 0, 0.3) 45%, rgba(5, 10, 25, 0.7) 100%)'"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Homepage overlay updated');
