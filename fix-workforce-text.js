const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace("Our {COMPANY_DATA.completedProjects} workforce", "Our {COMPANY_DATA.workforce} workforce");

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed paragraph');
