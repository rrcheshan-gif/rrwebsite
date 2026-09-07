const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

content = content.replace('Introduction & Vision', 'Company Overview');

fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
console.log('Fixed heading text');
