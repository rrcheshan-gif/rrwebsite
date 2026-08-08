const fs = require('fs');
const path = require('path');

const standardButton = `<div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              ← Back to Home
            </Link>
          </div>`;

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else if (file.endsWith('page.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('src/app');

files.forEach(file => {
    if (file.includes('components') || file.includes('plant') || file.includes('[id]')) return;
    
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/\+\? Back to Home/g, '← Back to Home');
    content = content.replace(/\? Back to Home/g, '← Back to Home');
    content = content.replace(/ Back to Home/g, '← Back to Home');

    const regex1 = /<div style=\{\{\s*textAlign:\s*"left",\s*marginBottom:\s*"20px"\s*\}\}>\s*<Link href="\/" style=\{\{.*?\}\}>.*?Back.*?<\/Link>\s*<\/div>/gs;
    
    content = content.replace(regex1, standardButton);
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log("Done updating links via Node.");
