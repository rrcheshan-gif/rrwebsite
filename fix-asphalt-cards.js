const fs = require('fs');
const file = 'src/app/resources/asphalt/yakawewa/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the invalid variable with a valid dark background color
content = content.replace(/background: "var\(--primary-dark\)"/g, 'background: "var(--text-dark)"');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed background variable for the asphalt cards header');
