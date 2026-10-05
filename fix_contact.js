const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'contact', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The goal is to replace the flex layout of the 3 location cards with a CSS Grid layout
// that stacks nicely on mobile.

const cardStyleRegex = /<div style={{ background: "var\(--white\)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", marginBottom: "25px", display: "flex", gap: "25px", alignItems: "center", flexWrap: "wrap", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease" }} onMouseOver=\{\(e\) => e\.currentTarget\.style\.transform = 'translateY\(-5px\)'\} onMouseOut=\{\(e\) => e\.currentTarget\.style\.transform = 'none'\}>/g;

const newCardStyle = `<div style={{ background: "var(--white)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "25px", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", alignItems: "center" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>`;

content = content.replace(cardStyleRegex, newCardStyle);

// Main Office Card
content = content.replace(
  /<div style={{ background: "rgba\(100,116,139,0\.1\)", color: "#64748b", padding: "20px", borderRadius: "20px" }}>([\s\S]*?)<\/div>\s*<div style={{ flex: "1 1 200px", minWidth: "200px" }}>([\s\S]*?)<\/div>/,
  `<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ background: "rgba(100,116,139,0.1)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>$1</div>
                  <div>$2</div>
                </div>`
);

// Main Warehouse Card
content = content.replace(
  /<div style={{ background: "rgba\(100,116,139,0\.1\)", color: "#64748b", padding: "20px", borderRadius: "20px" }}>([\s\S]*?)<\/div>\s*<div style={{ flex: "1 1 200px", minWidth: "200px" }}>([\s\S]*?)<\/div>/,
  `<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ background: "rgba(100,116,139,0.1)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>$1</div>
                  <div>$2</div>
                </div>`
);

// Workshop Card
content = content.replace(
  /<div style={{ background: "rgba\(100,116,139,0\.1\)", color: "#64748b", padding: "20px", borderRadius: "20px" }}>([\s\S]*?)<\/div>\s*<div style={{ flex: "1 1 200px", minWidth: "200px" }}>([\s\S]*?)<\/div>/,
  `<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ background: "rgba(100,116,139,0.1)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>$1</div>
                  <div>$2</div>
                </div>`
);

// Now fix the map wrappers to be 100% width instead of fixed 280px
const mapWrapperRegex = /<div className="contact-map-wrapper" style={{ marginLeft: "auto", flex: "0 0 280px", height: "180px", borderRadius: "16px", overflow: "hidden", border: "1px solid var\(--border-soft\)", boxShadow: "0 8px 25px rgba\(0,0,0,0\.08\)", marginTop: "0" }}>/g;
const newMapWrapper = `<div className="contact-map-wrapper" style={{ width: "100%", height: "220px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-soft)", boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}>`;
content = content.replace(mapWrapperRegex, newMapWrapper);


fs.writeFileSync(filePath, content);
console.log('Update complete');
