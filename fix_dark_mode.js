const fs = require('fs');
let file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
    /background: linear-gradient\(180deg, #ffffff 0%, #fafafa 100%\) !important;/g,
    'background: var(--white) !important;'
);

fs.writeFileSync(file, content, 'utf8');
console.log("Fixed dark mode background for services cards.");
