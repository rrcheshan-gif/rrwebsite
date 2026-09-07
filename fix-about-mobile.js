const fs = require('fs');
let content = fs.readFileSync('src/app/about/goals-and-targets/page.tsx', 'utf8');
content = content.replace(/flex: "1 1 400px"/g, 'flex: "1 1 min(100%, 400px)"');
fs.writeFileSync('src/app/about/goals-and-targets/page.tsx', content, 'utf8');
console.log('Fixed goals-and-targets mobile view');
