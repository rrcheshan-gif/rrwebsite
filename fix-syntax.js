const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(/\{\/\* Floating 30\+ Years Box Attached to Pictures \*\/ Attached to Pictures \*\/\}/g, "{/* Floating 30+ Years Box Attached to Pictures */}");

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed syntax error');
