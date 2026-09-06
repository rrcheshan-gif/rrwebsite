const fs = require('fs');
let content = fs.readFileSync('src/app/services/page.tsx', 'utf8');

// The encoding messed up the bullets and em-dashes
content = content.replace(/\?/g, '•'); // Bullet point
content = content.replace(/\?"/g, '-'); // em-dash

fs.writeFileSync('src/app/services/page.tsx', content, 'utf8');
console.log("Fixed encoding issues in services/page.tsx");
