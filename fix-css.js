const fs = require('fs');

let content = fs.readFileSync('src/app/globals.css', 'utf8');

// Replace floating !important;
content = content.replace(/^\s*!important;\s*$/gm, "");

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log('Fixed globals.css syntax error');
