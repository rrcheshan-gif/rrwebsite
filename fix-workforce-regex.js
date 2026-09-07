const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(/\{COMPANY_DATA\.workforce\}/g, "{COMPANY_DATA.completedProjects}");
content = content.replace(/>Dedicated<\/h4>/g, ">Completed</h4>");
content = content.replace(/>Professionals<\/p>/g, ">Projects</p>");

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Workforce replaced using regex');
