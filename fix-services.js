const fs = require('fs');
const path = require('path');

const servicesDir = 'src/app/services';
const dirs = fs.readdirSync(servicesDir).filter(f => fs.statSync(path.join(servicesDir, f)).isDirectory());

let updatedCount = 0;

for (const dir of dirs) {
    const pagePath = path.join(servicesDir, dir, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, 'utf8');

    // This regex matches the center-aligned heading and paragraph block
    const regex = /<div style=\{\{\s*textAlign:\s*'center',\s*marginBottom:\s*'40px'\s*\}\}>\s*<h2 style=\{\{[\s\S]*?\}\}>\s*([^<]+?)\s*<\/h2>\s*<p style=\{\{[\s\S]*?\}\}>\s*([\s\S]+?)\s*<\/p>\s*<\/div>/;

    const match = content.match(regex);
    if (match) {
        let title = match[1].trim();
        let paragraph = match[2].trim();

        // Split title into first part and last word
        let words = title.split(/\s+/);
        let lastWord = words.pop();
        let firstPart = words.join(' ');

        const newBlock = `<div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "800px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>CAPABILITIES</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "20px", fontWeight: 800, lineHeight: 1.1 }}>
              ${firstPart} <span className="text-gradient" style={{ fontWeight: 300 }}>${lastWord}</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "left", margin: 0 }}>
              ${paragraph}
            </p>
          </div>`;

        content = content.replace(regex, newBlock);
        fs.writeFileSync(pagePath, content, 'utf8');
        updatedCount++;
        console.log(`Updated ${dir}`);
    } else {
        console.log(`Regex did not match for ${dir}`);
    }
}

console.log(`Total pages updated: ${updatedCount}`);
