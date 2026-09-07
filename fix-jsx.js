const fs = require('fs');

let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

content = content.replace('{{/* Staircase Ribbon Timeline */}', '{/* Staircase Ribbon Timeline */}');

fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
console.log('Fixed JSX syntax');
