const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/health-and-safety/page.tsx', 'utf8');
content = content.replace(/environments(.*?|\uFFFD|—|)such/g, 'environments - such');
content = content.replace(/mitigations(.*?|\uFFFD|—|)we/g, 'mitigations - we');
fs.writeFileSync('src/app/sustainability/health-and-safety/page.tsx', content, 'utf8');
console.log('Fixed dash');
