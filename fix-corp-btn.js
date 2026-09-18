const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regexBtn = /<Link href="\/about\/history" className="btn btn-primary hover-glow" style=\{\{\s*padding:\s*"16px 36px",\s*fontSize:\s*"1\.0rem"\s*\}\}>Discover Our History<\/Link>/;

const newBtn = `<Link href="/about/history" className="btn-glass-red" style={{ display: "inline-flex", textDecoration: "none", alignItems: "center", gap: "8px" }}>Discover Our History <ArrowRight size={18} /></Link>`;

if (regexBtn.test(content)) {
    content = content.replace(regexBtn, newBtn);
    fs.writeFileSync('src/app/page.tsx', content, 'utf8');
    console.log('Replaced button successfully');
} else {
    console.log('Button regex did not match');
}
