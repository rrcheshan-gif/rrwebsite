const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
let newBlock = fs.readFileSync('newBlock.txt', 'utf8');

const target1 = '                <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = \\'translateY(-5px)\\'} onMouseOut={(e) => e.currentTarget.style.transform = \\'none\\'}>\n                  <ul style={{ listStyle: "none"';
const target2 = '                <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = \\'translateY(-5px)\\'} onMouseOut={(e) => e.currentTarget.style.transform = \\'none\\'}>\r\n                  <ul style={{ listStyle: "none"';

// Actually, let's just split by the exact string fragment we know is there
const fragment = 'border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = \\'translateY(-5px)\\'} onMouseOut={(e) => e.currentTarget.style.transform = \\'none\\'}>\\n                  <ul style={{ listStyle: "none"';

// To be completely safe from newline issues, I'll use regex without capture groups.
const regex = /<div style=\{\{ background: "var\(--white\)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease" \}\} onMouseOver=\{[^\}]+\} onMouseOut=\{[^\}]+\}>\s*<ul style=\{\{ listStyle: "none"/;

const match = content.match(regex);
if (match) {
    const replacement = newBlock + '\\n\\n' + match[0];
    content = content.replace(regex, replacement);
    fs.writeFileSync('src/app/contact/page.tsx', content, 'utf8');
    console.log("Inserted successfully");
} else {
    console.log("Regex not found");
}
