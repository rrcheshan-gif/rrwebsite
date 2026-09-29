const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

content = content.replace(
    /\.navbar-wrapper \.logo-sub \{\s*color: var\(--primary-red\) !important;/,
    '.navbar-wrapper .logo-sub {\n      color: #FF2020 !important;'
);

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log("Done.");
