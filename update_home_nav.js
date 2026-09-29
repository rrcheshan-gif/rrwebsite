const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

content = content.replace(
    /(\.navbar-wrapper\.home-nav:not\(\.scrolled\) \.logo-title,\s*)/,
    ''
);

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log("Updated globals.css");
