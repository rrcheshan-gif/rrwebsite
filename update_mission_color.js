const fs = require('fs');
let content = fs.readFileSync('src/app/about/vision-mission/page.tsx', 'utf8');

// Fix mission text color
content = content.replace(
    /<p style=\{\{ fontSize: "1\.25rem", lineHeight: 1\.8, color: "var\(--text-light\)", margin: 0, fontWeight: 400, textAlign: "justify" \}\}>\s*To consistently deliver/,
    '<p style={{ fontSize: "1.25rem", lineHeight: 1.8, color: "#000000", margin: 0, fontWeight: 400, textAlign: "justify" }}>\n                  To consistently deliver'
);

fs.writeFileSync('src/app/about/vision-mission/page.tsx', content, 'utf8');
console.log("Mission color updated to black.");
