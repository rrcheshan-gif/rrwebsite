const fs = require('fs');
const file = 'src/app/sustainability/environmental-stewardship/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("url('/images/page-headers/sustainability-green.jpg')", "url('/images/page-headers/sustainability-road.jpg')");

fs.writeFileSync(file, content, 'utf8');
console.log('Updated background image path.');
