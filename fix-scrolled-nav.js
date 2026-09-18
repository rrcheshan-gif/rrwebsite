const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Increase opacity of scrolled navbar background in light mode
content = content.replace(
  'background-color: rgba(255, 255, 255, 0.65);',
  'background-color: rgba(255, 255, 255, 0.95);'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed scrolled navbar opacity');
