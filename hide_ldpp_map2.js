const fs = require('fs');
const file = 'src/app/projects/data.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/(id:\s*'project-ldpp-package-02',)/, "$1\n      hideMap: true,");

fs.writeFileSync(file, content, 'utf8');
console.log('Updated data.js');
