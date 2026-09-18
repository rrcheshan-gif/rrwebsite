const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\$\{montserrat\.variable\}/g, '${manropeHeading.variable}');
content = content.replace(/\$\{openSans\.variable\}/g, '${manropeBody.variable}');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed variable names in layout');
