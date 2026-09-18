const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "borderRadius: '24px'",
  "borderRadius: 'clamp(24px, 5vw, 48px)'"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Increased border radius');
