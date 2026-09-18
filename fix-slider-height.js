const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "height: 'clamp(650px, 85vh, 950px)'",
  "height: 'clamp(550px, 70vh, 750px)'"
);

content = content.replace(
  "paddingBottom: '30px'",
  "paddingBottom: '80px'"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Reduced slider height');
