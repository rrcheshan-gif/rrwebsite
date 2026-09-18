const fs = require('fs');

let file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/<div className="logo-text">[\s\S]*?<\/div>/g, '');
fs.writeFileSync(file, content, 'utf8');

file = 'src/app/components/Footer.tsx';
content = fs.readFileSync(file, 'utf8');
content = content.replace(/<div className="footer-logo-text">[\s\S]*?<\/div>/g, '');
fs.writeFileSync(file, content, 'utf8');

console.log('Removed text from both');
