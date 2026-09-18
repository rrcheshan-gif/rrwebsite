const fs = require('fs');
const file = 'src/app/services/road-construction/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the title
content = content.replace(
  "Road & Highway <span",
  "Highway and Expressway <span"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated road construction page title');
