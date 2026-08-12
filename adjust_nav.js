const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Revert/Adjust gap between nav links to be safer
content = content.replace(
    /gap: clamp\(15px, 2vw, 32px\);/g,
    `gap: clamp(10px, 1.2vw, 24px);`
);

// Revert/Adjust font size of nav links to be safer
content = content.replace(
    /font-size: clamp\(0\.9rem, 1vw, 1\.05rem\);/g,
    `font-size: clamp(0.85rem, 0.9vw, 1rem);`
);

// Reduce padding inside the contact button to save some horizontal space
content = content.replace(
    /padding: 12px 28px !important;/g,
    `padding: 10px 20px !important;`
);
content = content.replace(
    /padding: 10px 24px !important;/g,
    `padding: 10px 20px !important;`
);

fs.writeFileSync(file, content, 'utf8');
