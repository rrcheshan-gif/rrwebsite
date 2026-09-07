const fs = require('fs');
let content = fs.readFileSync('src/app/projects/ongoing/page.tsx', 'utf8');
content = content.replace(/Sri Lanka\\\\'s/g, "Sri Lanka's");
content = content.replace(/Sri Lanka\\'s/g, "Sri Lanka's");
fs.writeFileSync('src/app/projects/ongoing/page.tsx', content, 'utf8');
console.log('Fixed quotes');
