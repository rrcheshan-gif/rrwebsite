const fs = require('fs');

let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

// Update project-colombo-port-harbour-infra
const regex1 = /(id:\s*'project-colombo-port-harbour-infra'[\s\S]*?category:\s*")maritime(")/;
content = content.replace(regex1, '$1roads$2');

// Update project-83
const regex2 = /(id:\s*'project-83'[\s\S]*?category:\s*")maritime(")/;
content = content.replace(regex2, '$1roads$2');

fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log("Updated projects to roads category.");
