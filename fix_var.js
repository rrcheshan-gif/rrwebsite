const fs = require('fs');
let content = fs.readFileSync('src/app/resources/concrete/page.tsx', 'utf8');

content = content.replace(/plant\.mapLink/g, 'loc.mapLink');

fs.writeFileSync('src/app/resources/concrete/page.tsx', content, 'utf8');
console.log("Fixed variable name.");
