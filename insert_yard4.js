const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
let newBlock = fs.readFileSync('newBlock.txt', 'utf8');

const targetStr = '<div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = \\'translateY(-5px)\\'} onMouseOut={(e) => e.currentTarget.style.transform = \\'none\\'}>\\n                  <ul';

// Let's use a regex that matches the start of the final container (which has no marginBottom)
const regex = /(<div style=\{\{ background: "var\(--white\)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease" \}\} onMouseOver=\{[^\}]+\} onMouseOut=\{[^\}]+\}>\s*<ul)/;

if (regex.test(content)) {
    const replacement = newBlock + '\n\n                ';
    content = content.replace(regex, replacement);
    fs.writeFileSync('src/app/contact/page.tsx', content, 'utf8');
    console.log("Inserted successfully");
} else {
    console.log("Regex not found");
}
