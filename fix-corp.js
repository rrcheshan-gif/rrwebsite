const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div style=\{\{\s*display:\s*"flex",\s*alignItems:\s*"center",\s*gap:\s*"15px",\s*marginBottom:\s*"25px"\s*\}\}>\s*<div style=\{\{\s*width:\s*"50px",\s*height:\s*"4px",\s*background:\s*"var\(--primary-red\)",\s*borderRadius:\s*"2px"\s*\}\}><\/div>\s*<h2 style=\{\{\s*color:\s*"var\(--primary-red\)",\s*fontWeight:\s*800,\s*letterSpacing:\s*"3px",\s*margin:\s*0,\s*fontSize:\s*"0\.95rem"\s*\}\}>Corporate Profile<\/h2>\s*<\/div>\s*<h1 style=\{\{\s*fontSize:\s*"clamp\(2\.2rem,\s*3\.5vw,\s*3\.2rem\)",\s*lineHeight:\s*1\.15,\s*marginBottom:\s*"25px",\s*color:\s*"var\(--text-dark\)",\s*fontFamily:\s*"var\(--font-heading\)",\s*fontWeight:\s*800\s*\}\}>\s*RR Construction<br \/>\(Pvt\) Ltd\s*<span style=\{\{\s*color:\s*"var\(--primary-red\)",\s*fontWeight:\s*600,\s*fontSize:\s*"0\.45em",\s*letterSpacing:\s*"2px",\s*display:\s*"block",\s*marginTop:\s*"15px",\s*\}\}>Construction & Heavy Civil Engineering In Sri Lanka<\/span>\s*<\/h1>/;

const newSection = `<div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Corporate Profile</h4>
              </div>
              <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", lineHeight: 1.1, marginBottom: "15px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>RR Construction <span className="text-gradient" style={{ fontWeight: 300 }}>(Pvt) Ltd</span></h2>
              <h3 style={{ color: "var(--primary-red)", fontWeight: 600, fontSize: "1.1rem", letterSpacing: "1px", marginBottom: "25px" }}>Construction & Heavy Civil Engineering In Sri Lanka</h3>`;

if (regex.test(content)) {
    content = content.replace(regex, newSection);
    fs.writeFileSync('src/app/page.tsx', content, 'utf8');
    console.log('Replaced successfully');
} else {
    console.log('Regex did not match');
}
