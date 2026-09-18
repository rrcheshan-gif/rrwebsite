const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Update Navigation font-weight
content = content.replace(
  /\.nav-links a,\s*\.dropdown-header a \{\s*font-weight: 700;/g,
  `.nav-links a,\n  .dropdown-header a {\n    font-weight: 600;`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated nav links font weight');
