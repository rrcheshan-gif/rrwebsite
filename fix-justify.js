const fs = require('fs');
const file = 'src/app/news/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add textAlign: 'justify' to the article-content div
content = content.replace(
  'color: "var(--text-dark)"',
  'color: "var(--text-dark)",\n              textAlign: "justify"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Added text-align justify');
