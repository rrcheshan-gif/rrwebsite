const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

// Change navbar-wrapper .logo-title from white to red
content = content.replace(
    /\.navbar-wrapper \.logo-title \{\s*color: #ffffff !important;/,
    '.navbar-wrapper .logo-title {\n      color: #FF2020 !important;'
);

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log("Done 2.");
