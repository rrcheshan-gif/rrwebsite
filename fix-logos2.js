const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /maxWidth: "100%", maxHeight: "100%", objectFit: "contain"/,
  'width: "100%", height: "100%", objectFit: "contain"'
);

content = content.replace(
  /fontSize: "1rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "0.5px", lineHeight: 1.3/,
  'fontSize: "1.05rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "0.5px", lineHeight: 1.3'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Applied additional styling');
