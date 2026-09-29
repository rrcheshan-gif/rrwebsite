const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
let newBlock = fs.readFileSync('newBlock.txt', 'utf8');

const regex = /<div style=\{\{ background: "var\(--white\)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease" \}\} onMouseOver=\{[^\}]+\} onMouseOut=\{[^\}]+\}>\s*<ul style=\{\{ listStyle: "none"/;

const match = content.match(regex);
if (match) {
    const replacement = newBlock + '\n\n' + match[0];
    content = content.replace(regex, replacement);
    fs.writeFileSync('src/app/contact/page.tsx', content, 'utf8');
    console.log("Inserted successfully");
} else {
    console.log("Regex not found");
}
