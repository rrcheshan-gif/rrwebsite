const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/font-family: var\(--font-body\);/g, 'font-family: var(--font-body), "Plus Jakarta Sans", sans-serif;');
content = content.replace(/font-family: var\(--font-heading\);/g, 'font-family: var(--font-heading), "Plus Jakarta Sans", sans-serif;');

fs.writeFileSync(file, content, 'utf8');
console.log('Added font fallbacks');
