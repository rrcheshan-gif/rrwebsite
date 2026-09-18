const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

content = content.replace(/letter-spacing: -0\.015em;/g, 'letter-spacing: normal;');
content = content.replace(/word-spacing: -0\.05em; \/\* Reduces large gaps between words in justified text \*\//g, 'word-spacing: normal;');

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log('Fixed paragraph typography');
