const fs = require('fs');
let content = fs.readFileSync('src/app/services/page.tsx', 'utf8');

// The encoding messed up the bullets and em-dashes
content = content.replace(/\uFFFD\?\uFFFD/g, '•'); // Bullet point replacement
content = content.replace(/\uFFFD\?"/g, '-'); // em-dash replacement

fs.writeFileSync('src/app/services/page.tsx', content, 'utf8');
console.log("Fixed encoding issues in services/page.tsx");
