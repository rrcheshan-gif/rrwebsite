const fs = require('fs');
let content = fs.readFileSync('src/data/company-data.ts', 'utf8');
// move Building Projects to the end
content = content.replace('"Building Projects",\n    ', '');
content = content.replace('"Railway Civil Works"\n  ]', '"Railway Civil Works",\n    "Building Projects"\n  ]');
fs.writeFileSync('src/data/company-data.ts', content, 'utf8');
console.log('Fixed company-data.ts');
