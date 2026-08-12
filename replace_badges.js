const fs = require('fs');
const files = [
  'src/app/omanthai-plant/page.tsx',
  'src/app/thudugala-plant/page.tsx',
  'src/app/veerapuram-plant/page.tsx',
  'src/app/yakawewa-plant/page.tsx'
];

const newHtml = `            <div style={{ display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap", marginTop: "15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.2)", color: "var(--primary-red)", padding: "10px 22px", borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem", backdropFilter: "blur(5px)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                High Quality
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.2)", color: "var(--primary-red)", padding: "10px 22px", borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem", backdropFilter: "blur(5px)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Cost Effective
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.2)", color: "var(--primary-red)", padding: "10px 22px", borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem", backdropFilter: "blur(5px)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Eco Friendly
              </div>
            </div>`;

for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const targetRegex = /<div style=\{\{\s*display: "flex",\s*justifyContent: "center",\s*gap: "20px",\s*flexWrap: "wrap"\s*\}\}>\s*<span[^>]*>High Quality<\/span>\s*<span[^>]*>Cost Effective<\/span>\s*<span[^>]*>Eco Friendly<\/span>\s*<\/div>/g;
  
  if (content.match(targetRegex)) {
    content = content.replace(targetRegex, newHtml);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Replaced in ${file}`);
  } else {
    console.log(`Pattern not found in ${file}`);
  }
}
