const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');
content = content.replace(/id: id:/g, 'id:');
fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log("Fixed extra id.");
