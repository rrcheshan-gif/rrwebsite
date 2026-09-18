const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// I will use regex to replace the second .logo { block or both
content = content.replace(
  /\.logo \{\s*display: flex !important;\s*align-items: center !important;\s*gap: 10px !important;\s*margin-right: 20px !important; \/\* Ensure it never touches the Home link \*\/\s*\}/g,
  `.logo {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    margin-right: 20px !important; 
    margin-left: clamp(20px, 4vw, 60px) !important;
  }`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Added margin-left to logo (robust)');
