const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

// Replace the flexWrap: "wrap", gap: "60px", alignItems: "center" block in the unified section
const regex = /gap: "60px", alignItems: "center" \}\}>\s*<div style=\{\{ flex: "1\.2",/;
if (regex.test(content)) {
    content = content.replace(regex, 'gap: "60px", alignItems: "flex-start" }}>\\n            \\n            <div style={{ flex: "1.2",');
    fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
    console.log('Fixed alignment with regex');
} else {
    console.log('Regex did not match');
}
