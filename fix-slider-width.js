const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "width: 'calc(100% - 40px)', maxWidth: '1800px'",
  "width: '92%', maxWidth: '1440px'"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Reduced slider width');
