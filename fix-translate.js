const fs = require('fs');
let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

content = content.replace(/transform:\s*\t?ranslateY\(-px\),/, 'transform: "translateY(-" + (i * 60) + "px)",');

fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
console.log('Fixed translateY');
