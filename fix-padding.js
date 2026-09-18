const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "paddingTop: '100px'",
  "paddingTop: '150px'"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Increased padding top');
