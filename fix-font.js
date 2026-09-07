const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Revert the button font size
content = content.replace(
  'fontSize: "0.85rem" }}>Discover Our Legacy',
  'fontSize: "1.0rem" }}>Discover Our Legacy'
);

// Fix the actual card text font size
content = content.replace(
  '<p className="msc-text" style={{ fontSize: "1rem", color: "#e2e8f0", margin: 0, lineHeight: 1.6 }}>{srv.text}</p>',
  '<p className="msc-text" style={{ fontSize: "0.9rem", color: "#e2e8f0", margin: 0, lineHeight: 1.5 }}>{srv.text}</p>'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed fonts');
