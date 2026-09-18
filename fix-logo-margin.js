const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

const oldLogoClass = `.logo {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    margin-right: 20px !important; /* Ensure it never touches the Home link */
  }`;

const newLogoClass = `.logo {
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    margin-right: 20px !important; /* Ensure it never touches the Home link */
    margin-left: clamp(20px, 4vw, 60px) !important; /* Push inwards from the left edge */
  }`;

content = content.replace(oldLogoClass, newLogoClass);

fs.writeFileSync(file, content, 'utf8');
console.log('Added margin-left to logo');
