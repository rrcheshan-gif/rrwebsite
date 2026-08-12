const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// 1. Increase gap between nav links
content = content.replace(
    /gap: clamp\(8px, 1vw, 18px\);/g,
    `gap: clamp(15px, 2vw, 32px);`
);

// 2. Increase font size of nav links
content = content.replace(
    /font-size: clamp\(0\.75rem, 0\.85vw, 0\.95rem\);/g,
    `font-size: clamp(0.9rem, 1vw, 1.05rem);`
);

fs.writeFileSync(file, content, 'utf8');
