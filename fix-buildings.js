const fs = require('fs');
const filePath = 'src/app/projects/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace('multi-storied buildings', 'buildings');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Replaced successfully.');
