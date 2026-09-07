const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

content = content.replace("precision, safety, and international quality standards", "precision, health and safety, and international quality standards");

fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
console.log('Fixed health and safety wording');
