const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

content = content.replace(/nation.s/g, "nation's");

fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
console.log('Fixed apostrophe using regex');
