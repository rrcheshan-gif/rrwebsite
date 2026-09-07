const fs = require('fs');
const file = 'src/app/projects/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("{project.type !== 'ongoing' && (", "{project.type !== 'ongoing' && !project.hideMap && (");

fs.writeFileSync(file, content, 'utf8');
console.log('Updated page.tsx');
