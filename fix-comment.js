const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

content = content.replace('{/* Our Journey & Strength */}', '{/* Internal Strength */}');

fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
