const fs = require('fs');

const targetPath = 'src/app/projects/[id]/page.tsx';
let content = fs.readFileSync(targetPath, 'utf8');

content = content.replace(
    /if \(cat === 'maritime'\) categoryDisplay = 'Maritime & Dredging';/,
    "if (cat === 'maritime') categoryDisplay = 'Maritime';\n  if (cat === 'dredging') categoryDisplay = 'Dredging and Reclamation';"
);

fs.writeFileSync(targetPath, content, 'utf8');
console.log("Updated projects detail page category names.");
