const fs = require('fs');

let content = fs.readFileSync('src/app/sustainability/social-responsibility/page.tsx', 'utf8');

// Replace corrupted em dash or standard em dash with ' - ' to be safe on Windows/PowerShell
content = content.replace(/—/g, ' - ');
content = content.replace(//g, ' - ');

fs.writeFileSync('src/app/sustainability/social-responsibility/page.tsx', content, 'utf8');
console.log('Fixed dash encoding successfully');
