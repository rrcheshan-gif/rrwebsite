const fs = require('fs');

let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Replace Outfit with Montserrat
content = content.replace(/Outfit/g, "Montserrat");
content = content.replace(/outfit/g, "montserrat");

// Replace Plus_Jakarta_Sans with Inter
content = content.replace(/Plus_Jakarta_Sans/g, "Inter");
content = content.replace(/jakarta/g, "inter");

fs.writeFileSync('src/app/layout.tsx', content, 'utf8');
console.log("Updated layout.tsx to use Montserrat and Inter");
