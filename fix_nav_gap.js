const fs = require('fs');
let file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Add margin-left to nav-links to separate from logo
content = content.replace(
    /\.nav-links \{\s*display: flex;\s*gap: clamp\(6px, 1vw, 18px\);\s*align-items: center;\s*\}/,
    '.nav-links {\n    display: flex;\n    gap: clamp(10px, 1.5vw, 25px);\n    align-items: center;\n    margin-left: auto;\n  }'
);

fs.writeFileSync(file, content, 'utf8');
