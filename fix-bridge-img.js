const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /img:\s*"\/images\/kilinochchi-bridge-feature\.jpg"/,
  'img: "/images/home/bridge-construction-new.jpg"'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Replaced bridge construction image');
