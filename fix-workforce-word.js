const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  '<p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Workforce</p>',
  '<p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Professionals</p>'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Workforce word changed to Professionals');
