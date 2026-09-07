const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the first paragraph's style
content = content.replace(
  'p style={{ color: "var(--text-light)", marginBottom: "40px", lineHeight: 1.8, fontSize: "1.1rem" }}',
  'p style={{ textAlign: "justify", color: "var(--text-light)", marginBottom: "40px", lineHeight: 1.8, fontSize: "1.1rem" }}'
);

// Replace the second paragraph (Since our establishment...)
content = content.replace(
  'p style={{ fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "15px", lineHeight: 1.8 }}',
  'p style={{ textAlign: "justify", fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "15px", lineHeight: 1.8 }}'
);

// Replace the third paragraph (Backed by a proven track record...)
content = content.replace(
  'p style={{ fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "30px", lineHeight: 1.8 }}',
  'p style={{ textAlign: "justify", fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "30px", lineHeight: 1.8 }}'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Text justified');
