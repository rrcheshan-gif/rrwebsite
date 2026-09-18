const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Update .hero-subheading font-weight
content = content.replace(
  /\.hero-subheading \{\s*font-size: 1\.25rem;\s*font-weight: 400;/g,
  `.hero-subheading {\n    font-size: 1.25rem;\n    font-weight: 600;`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated .hero-subheading font weight');
