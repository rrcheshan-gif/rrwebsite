const fs = require('fs');
let file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
    /\.services-card-grid \{\s*grid-template-columns: 1fr !important;/g,
    `.services-card-grid {
              flex-direction: column !important;`
);

content = content.replace(
    /width: calc\(33\.333% - 20px\);/g,
    `width: calc(33.333% - 20px);`
);

// We need the cards to be 100% width on mobile:
content = content.replace(
    /\.services-item-card \{\s*padding: 30px 24px !important;/g,
    `.services-item-card {
              width: 100% !important;
              max-width: none !important;
              padding: 30px 24px !important;`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Fixed mobile layout for flex grid.");
