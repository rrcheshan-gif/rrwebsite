const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix flex basics that break on mobile
content = content.replace(/flex: "1 1 500px"/g, 'flex: "1 1 min(100%, 500px)"');
content = content.replace(/flex: "1 1 400px"/g, 'flex: "1 1 min(100%, 400px)"');

// Fix the overlapping card transform that overflows mobile
content = content.replace(/translateX\(-30px\)/g, 'translateX(0)');
content = content.replace(/translateX\(-20px\)/g, 'translateX(0)');

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Mobile view issues patched in page.tsx');
