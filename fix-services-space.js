const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The problematic grid:
const oldGrid = 'gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px"';
const newGrid = 'gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "25px"';

// Change height slightly for 2x2 to look sleek
const oldHeight = 'minHeight: "340px", position: "relative"';
const newHeight = 'minHeight: "300px", position: "relative"';

content = content.replace(oldGrid, newGrid);
content = content.replace(oldHeight, newHeight);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed services grid spacing to 2x2');
