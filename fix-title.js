const fs = require('fs');
let content = fs.readFileSync('src/data/news-data.ts', 'utf8');
content = content.replace(/title: 'Pending Railway Project \.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.\.',/, "title: 'Pending Railway Project',");
fs.writeFileSync('src/data/news-data.ts', content, 'utf8');
console.log('Fixed title.');
