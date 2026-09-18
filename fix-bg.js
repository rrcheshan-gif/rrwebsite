const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Section 1: CORE EXPERTISE
content = content.replace(
  /<section style=\{\{\s*padding:\s*"60px 20px",\s*background:\s*"var\(--bg-light\)",\s*position:\s*"relative"\s*\}\}>/,
  `<section className="bg-gradient-adaptive" style={{ padding: "60px 20px", position: "relative" }}>`
);

// Section 2: PROJECT HIGHLIGHTS (Latest News)
content = content.replace(
  /<section style=\{\{\s*padding:\s*"50px 20px",\s*background:\s*"var\(--bg-light\)",\s*overflow:\s*"hidden",\s*position:\s*"relative"\s*\}\}>/,
  `<section className="bg-gradient-adaptive" style={{ padding: "50px 20px", overflow: "hidden", position: "relative" }}>`
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Applied bg-gradient-adaptive to all home sections');
