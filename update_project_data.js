const fs = require('fs');

let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const projectIds = ['project-46', 'project-105', 'project-57', 'project-101', 'project-100'];

projectIds.forEach(id => {
    const regex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?category:\\s*['"])maritime(['"])`);
    content = content.replace(regex, `$1dredging$2`);
});

fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log("Updated project categories to dredging.");
