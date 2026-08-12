const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// 1. Reduce contact button padding
content = content.replace(
    /padding: 11px 26px;/g,
    `padding: 10px 18px;`
);

// 2. Reduce overall navbar gap
content = content.replace(
    /gap: clamp\(20px, 3vw, 50px\);/g,
    `gap: clamp(10px, 2vw, 35px);`
);

// 3. Slightly reduce font size of nav links (it was clamp(0.9rem, 1vw, 1.05rem))
content = content.replace(
    /font-size: clamp\(0\.9rem, 1vw, 1\.05rem\);/g,
    `font-size: clamp(0.85rem, 0.95vw, 1rem);`
);

fs.writeFileSync(file, content, 'utf8');
