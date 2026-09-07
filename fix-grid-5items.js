const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Use auto-fit with minmax to handle 1 vs 2 columns natively
content = content.replace(
  'gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"',
  'gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))"'
);

// For the 5th item (index 4), span all columns. 
// "1 / -1" spans the entire row whether it has 1 column (mobile) or 2 columns (desktop).
content = content.replace(
  'gridColumn: "auto", minHeight: "300px"',
  'gridColumn: i === 4 ? "1 / -1" : "auto", minHeight: "300px"'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed grid for 5 items');
