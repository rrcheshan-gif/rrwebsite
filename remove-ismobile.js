const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  'gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)"',
  'gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"'
);

content = content.replace(
  'gridColumn: i === 4 && !isMobile ? "1 / -1" : "auto"',
  'gridColumn: "auto"'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Removed isMobile reference and used CSS auto-fit instead');
