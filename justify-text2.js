const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  'p style={{ fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "25px", lineHeight: 1.8 }}',
  'p style={{ textAlign: "justify", fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "25px", lineHeight: 1.8 }}'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Text justified 2');
