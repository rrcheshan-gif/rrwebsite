const fs = require('fs');

let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const regex = /(id:\s*'project-10'[\s\S]*?year:\s*)2025/;
content = content.replace(regex, (match, p1) => {
    return p1 + '2026';
});

fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log("Updated year for project-10 to 2026.");
