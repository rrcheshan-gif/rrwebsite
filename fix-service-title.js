const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the title
content = content.replace(
  "title: 'Road & Highway Construction',",
  "title: 'Highway and Expressway Construction',"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated service card title');
