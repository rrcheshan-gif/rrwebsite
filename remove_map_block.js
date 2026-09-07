const fs = require('fs');
const file = 'src/app/projects/[id]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Restore the accidental change to Duration block
content = content.replace("{project.type !== 'ongoing' && !project.hideMap && (", "{project.type !== 'ongoing' && (");

// Remove the Location Maps block entirely
const locationBlockRegex = /\{\/\*\s*Location Maps\s*\*\/\}[\s\S]*?\)\}/;
content = content.replace(locationBlockRegex, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed accidental replacement and removed Location Maps block.');
