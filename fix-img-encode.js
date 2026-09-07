const fs = require('fs');
let content = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

content = content.replace(
  'src={imgSrc}',
  'src={encodeURI(imgSrc)}'
);

fs.writeFileSync('src/app/projects/page.tsx', content, 'utf8');
console.log('Fixed img encoding in projects page');
