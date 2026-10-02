const fs = require('fs');
const path = 'src/app/globals.css';
let content = fs.readFileSync(path, 'utf8');

// Remove .footer-social-pills a and its hover state
content = content.replace(/\.footer-social-pills a\s*\{[\s\S]*?\}/, '');
content = content.replace(/\.footer-social-pills a:hover\s*\{[\s\S]*?\}/, '');

fs.writeFileSync(path, content, 'utf8');
console.log("Updated globals.css");
