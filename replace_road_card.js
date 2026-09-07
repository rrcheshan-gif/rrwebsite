const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("image: '/images/kilinochchi-iroad/kilinochchi-2.jpg'", "image: '/images/page-headers/sustainability-road-hq.jpg'");

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced road image on services page.');
