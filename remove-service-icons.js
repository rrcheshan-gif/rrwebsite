const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div style=\{\{\s*color:\s*"white",\s*marginBottom:\s*"20px",\s*display:\s*"inline-block",\s*padding:\s*"15px",\s*background:\s*"var\(--primary-red\)",\s*borderRadius:\s*"20px",\s*boxShadow:\s*"0 10px 20px rgba\(229,57,53,0\.3\)"\s*\}\}>\{srv\.icon\}<\/div>/g;

content = content.replace(regex, '');

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Removed service card icons');
