const fs = require('fs');
let file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Force 100% width and gap on navbar
content = content.replace(
    /\.navbar \{\s*display: flex;\s*justify-content: space-between;\s*align-items: center;\s*\}/,
    '.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    gap: 60px;\n  }'
);

// Force logo to not shrink
content = content.replace(
    /\.logo \{\s*display: flex;\s*align-items: center;\s*gap: 10px;\s*\}/,
    '.logo {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex-shrink: 0;\n    margin-right: auto;\n  }'
);

fs.writeFileSync(file, content, 'utf8');
