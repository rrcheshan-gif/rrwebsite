const fs = require('fs');

const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/url\(\'\/images\/page-headers\/services-build\.jpg\'\)/g, "url('/images/puttalam/puttalam-2.jpg')");
content = content.replace(/\/images\/machinery-combined\.jpg/g, "/images/machinery/plant-6.jpg");
content = content.replace(/\/images\/page-headers\/services-build\.jpg/g, "/images/puttalam/puttalam-3.jpg");

fs.writeFileSync(file, content, 'utf8');
