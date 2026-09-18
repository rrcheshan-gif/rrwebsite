const fs = require('fs');
const file = 'src/app/projects/overseas/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The safest way to remove the block is using a regex that matches across newlines
content = content.replace(/\{\/\* Filter Tabs \*\/\}[\s\S]*?\{\/\* Projects Grid \*\/\}/g, "{/* Projects Grid */}");
content = content.replace(/\{filter === 'all'[\s\S]*?\}\)/g, "");

fs.writeFileSync(file, content, 'utf8');
console.log('Removed tabs from overseas page');
