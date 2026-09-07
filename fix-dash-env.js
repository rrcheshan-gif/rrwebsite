const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/environmental-stewardship/page.tsx', 'utf8');
content = content.replace(/operations(.*?|\uFFFD|—|)such/g, 'operations - such');
content = content.replace(/Scheme(.*?|\uFFFD|—|)and/g, 'Scheme - and');
fs.writeFileSync('src/app/sustainability/environmental-stewardship/page.tsx', content, 'utf8');
console.log('Fixed dash env');
