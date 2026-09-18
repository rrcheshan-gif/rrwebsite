const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

const target = '.footer-bottom-bar {';
const replacement = `.footer-bottom-bar p {
  text-align: center !important;
}

.footer-bottom-bar {`;

content = content.replace(target, replacement);

fs.writeFileSync(file, content, 'utf8');
console.log('Added text-align center to footer bottom bar p tag');
