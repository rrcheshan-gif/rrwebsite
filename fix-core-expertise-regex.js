const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div style=\{\{\s*textAlign:\s*"center",\s*marginBottom:\s*"60px"\s*\}\}>[\s\S]*?<div style=\{\{\s*width:\s*"60px",\s*height:\s*"4px",\s*background:\s*"var\(--primary-red\)",\s*margin:\s*"20px auto"\s*\}\}><\/div>\s*<\/div>/;

const newSection = `<div style={{ marginBottom: "50px", maxWidth: "800px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Sectors of Operation</h4>
              </div>
              <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", lineHeight: 1.1, marginBottom: "20px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>Our Core <span className="text-gradient" style={{ fontWeight: 300 }}>Expertise</span></h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "30px", lineHeight: 1.8 }}>
                Discover our comprehensive range of heavy civil engineering services, delivering structural excellence across national highways, bridges, maritime infrastructure, and mass earthworks.
              </p>
            </div>`;

content = content.replace(regex, newSection);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Replaced successfully');
