const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

content = content.replace(/\.img-polished\s*\{[\s\S]*?\}/, ".img-polished {\n    /* Removed filters to preserve raw image detail */\n    filter: none;\n}");
content = content.replace(/\.img-hover-zoom\s*\{[\s\S]*?\}/, ".img-hover-zoom {\n    transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);\n}");
content = content.replace(/\.img-hover-zoom:hover\s*\{[\s\S]*?\}/, ".img-hover-zoom:hover {\n    transform: scale(1.05);\n}");

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log('globals.css regex updated');
