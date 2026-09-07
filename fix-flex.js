const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the grid container with a flex container centered
content = content.replace(
  '<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "25px" }}>',
  '<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "25px" }}>'
);

// Replace the card styles to use width instead of relying on grid
content = content.replace(
  /style=\{\{\s*minHeight:\s*"260px",\s*position:\s*"relative",\s*overflow:\s*"hidden",\s*padding:\s*0,\s*borderRadius:\s*"20px"\s*\}\}/g,
  'style={{ width: "min(100%, 340px)", minHeight: "280px", position: "relative", overflow: "hidden", padding: 0, borderRadius: "20px" }}'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated to centered Flexbox layout');
