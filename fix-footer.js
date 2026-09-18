const fs = require('fs');
const file = 'src/app/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<a href="#" aria-label="Facebook"',
  '<a href="https://web.facebook.com/profile.php?id=61594119435109" target="_blank" rel="noopener noreferrer" aria-label="Facebook"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Facebook link in Footer');
