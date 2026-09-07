const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

// replace 1st occurrence
content = content.replace(/["']Buildings & Facilities["'],?\s*/, '');
// append to the end
content = content.replace(/["']Machine & Equipment Rental["']\s*]/, '"Machine & Equipment Rental",\n                    "Buildings & Facilities"\n                  ]');

fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');

let dataContent = fs.readFileSync('src/data/company-data.ts', 'utf8');
dataContent = dataContent.replace(/["']Building Projects["'],?\s*/, '');
dataContent = dataContent.replace(/["']Railway Civil Works["']\s*]/, '"Railway Civil Works",\n    "Building Projects"\n  ]');
fs.writeFileSync('src/data/company-data.ts', dataContent, 'utf8');

