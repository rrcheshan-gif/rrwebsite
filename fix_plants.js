const fs = require('fs');
const path = require('path');

const files = [
  'src/app/resources/aggregates/omanthai/page.tsx',
  'src/app/resources/aggregates/thudugala/page.tsx',
  'src/app/resources/aggregates/veerapuram/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace parent div
  content = content.replace(/<div style=\{\{ position: "relative", minHeight: "350px", background: "#eee" \}\}>/g, '<div style={{ minHeight: "350px", background: "#eee", display: "flex" }}>');
  
  // Replace iframe style
  content = content.replace(/style=\{\{ border: 0, position: "absolute", top: 0, left: 0 \}\}/g, 'style={{ border: 0, flex: 1, minHeight: "350px" }}');

  fs.writeFileSync(filePath, content);
});

console.log("Fixed plant iframes");
