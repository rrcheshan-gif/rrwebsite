const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /\.nav-desktop-actions \{\s*display: flex;\s*align-items: center;\s*gap: 14px;\s*flex-shrink: 0;\s*margin-left: auto;\s*\}/g,
  `.nav-desktop-actions {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: clamp(20px, 4vw, 60px) !important;
  }`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Added margin-right to nav-desktop-actions (robust)');
