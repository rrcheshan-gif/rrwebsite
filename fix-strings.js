const fs = require('fs');

let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');
content = content.replace('Sri Lanka"s', "Sri Lanka's");
content = content.replace('domainsincluding', 'domains—including'); // en dash or em dash

fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
