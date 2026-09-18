const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '"https://www.facebook.com/rrconstruction"',
  '"https://web.facebook.com/profile.php?id=61594119435109"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Facebook link in layout Schema');
