const fs = require('fs');
let file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// We are replacing the container for the 3 legacy boxes
content = content.replace(
  '<div style={{ flex: 1, minWidth: \'min(100%, 350px)\', display: "grid", gap: "25px", position: "relative" }}>',
  '<div style={{ flex: 1, minWidth: \'min(100%, 350px)\', display: "grid", gap: "25px", position: "relative", marginTop: "60px" }}>'
);

fs.writeFileSync(file, content, 'utf8');
console.log("Moved legacy boxes down by 60px");
