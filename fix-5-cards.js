const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace container
content = content.replace(
  /<div style=\{\{\s*display:\s*"flex",\s*flexWrap:\s*"wrap",\s*justifyContent:\s*"center",\s*gap:\s*"25px"\s*\}\}>/,
  `<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>`
);

// Replace card width
content = content.replace(
  /className="modern-service-card glass-panel hover-lift" style=\{\{\s*width:\s*"min\(100%,\s*340px\)"/g,
  `className="modern-service-card glass-panel hover-lift" style={{ width: "100%"`
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Replaced grid for 5 cards');
