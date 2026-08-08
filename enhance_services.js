const fs = require('fs');
let file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
    /\.services-item-card \{\s*width: calc\(33\.333% - 20px\);\s*min-width: 320px;\s*max-width: 450px;\s*border-radius: 24px;/,
    `.services-item-card {
            width: calc(33.333% - 20px);
            min-width: 320px;
            max-width: 450px;
            border-radius: 24px;
            border-top: 4px solid var(--primary-red) !important;
            background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%) !important;`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Added modern top border and subtle gradient.");
