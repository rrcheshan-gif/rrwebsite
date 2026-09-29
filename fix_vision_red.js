const fs = require('fs');
let content = fs.readFileSync('src/app/about/vision-mission/page.tsx', 'utf8');

content = content.replace(
    /Passion for <span style=\{\{ color: "var\(--primary-red\)" \}\}>Engineering Excellence<\/span>/,
    'Passion for Engineering Excellence'
);

fs.writeFileSync('src/app/about/vision-mission/page.tsx', content, 'utf8');
console.log("Removed red from Engineering Excellence.");
