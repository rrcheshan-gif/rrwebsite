const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /border:\s*"1px solid var\(--border-soft\)"/g,
  (match, offset, string) => {
    // Only replace the one in the Wirtgen card (or if there are multiple, it's fine for news cards, but let's be careful)
    // We can do a string replace on the exact card div
    return match;
  }
);

const oldDiv = `<div className="glass-panel hover-lift" style={{ borderRadius: "20px", overflow: "hidden", background: "var(--white)", border: "1px solid var(--border-soft)", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>`;
const newDiv = `<div className="glass-panel hover-lift" style={{ borderRadius: "20px", overflow: "hidden", background: "var(--white)", border: "1px solid rgba(211, 47, 47, 0.4)", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>`;

content = content.replace(oldDiv, newDiv);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Added thin red outline to the card');
