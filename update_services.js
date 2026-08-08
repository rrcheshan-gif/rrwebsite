const fs = require('fs');
let file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Change the grid to flex for centering
content = content.replace(
    /\.services-card-grid \{\s*display: grid;\s*grid-template-columns: repeat\(auto-fit, minmax\(320px, 1fr\)\);\s*gap: 30px;\s*\}/,
    `.services-card-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
          }`
);

// 2. Add flex basis/width to the card
content = content.replace(
    /\.services-item-card \{\s*border-radius: 24px;/,
    `.services-item-card {
            width: calc(33.333% - 20px);
            min-width: 320px;
            max-width: 450px;
            border-radius: 24px;`
);

// 3. Fix the dark theme definitions in the array to use the light modern theme
// Buildings & Structures
content = content.replace(/cardBg: 'linear-gradient\(135deg, #111827, #1f2937\)'/g, "cardBg: 'var(--white)'");
content = content.replace(/titleColor: '#ffffff'/g, "titleColor: 'var(--text-dark)'");
content = content.replace(/textColor: '#9ca3af'/g, "textColor: 'var(--text-light)'");
content = content.replace(/iconBg: 'rgba\(255,255,255,0\.08\)'/g, "iconBg: 'rgba(229,57,53,0.08)'");
content = content.replace(/iconBorder: '1px solid rgba\(255,255,255,0\.12\)'/g, "iconBorder: 'none'");
content = content.replace(/stroke="#fff"/g, 'stroke="var(--primary-red)"');

fs.writeFileSync(file, content, 'utf8');
console.log("Applied modern colors and centered orphan card.");
