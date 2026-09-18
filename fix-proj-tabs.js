const fs = require('fs');
const file = 'src/app/projects/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(", 'overseas'", "");

fs.writeFileSync(file, content, 'utf8');
console.log('Removed overseas filter from main projects page');
