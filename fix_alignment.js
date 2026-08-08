const fs = require('fs');

let file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The flex container
content = content.replace(
  '<div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", position: "relative", zIndex: 2 }}>',
  '<div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start", position: "relative", zIndex: 2 }}>'
);

// The left column
content = content.replace(
  '<div style={{ flex: 1, minWidth: \'min(100%, 350px)\', position: "relative" }}>',
  '<div style={{ flex: 1, minWidth: \'min(100%, 350px)\', position: "relative", paddingTop: "20px" }}>'
);

fs.writeFileSync(file, content, 'utf8');
console.log("Fixed alignment");
