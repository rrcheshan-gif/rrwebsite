const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');
content = content.replace('                    "Buildings & Facilities",\n', '');
content = content.replace('"Machine & Equipment Rental"\n                  ]', '"Machine & Equipment Rental",\n                    "Buildings & Facilities"\n                  ]');
fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
console.log('Fixed overview');
