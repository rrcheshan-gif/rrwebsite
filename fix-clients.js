const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /\{\/\*\s*Tightly Integrated Major Clients Footer Strip\s*\*\/\}\s*<div\s*style=\{\{\s*width:\s*"100%",\s*marginTop:\s*"15px",\s*paddingTop:\s*"20px",\s*borderTop:\s*"1px solid var\(--border-soft\)",\s*display:\s*"flex",\s*flexDirection:\s*"column",\s*alignItems:\s*"center",\s*textAlign:\s*"center",\s*gap:\s*"15px",\s*position:\s*"relative",\s*zIndex:\s*2\s*\}\}\s*>\s*<div style=\{\{\s*display:\s*"flex",\s*alignItems:\s*"center",\s*gap:\s*"12px"\s*\}\}>\s*<div style=\{\{\s*width:\s*"25px",\s*height:\s*"1px",\s*background:\s*"var\(--primary-red\)"\s*\}\}><\/div>\s*<h4 style=\{\{\s*color:\s*"var\(--primary-red\)",\s*fontWeight:\s*700,\s*letterSpacing:\s*"2\.5px",\s*margin:\s*0,\s*fontSize:\s*"0\.82rem"\s*\}\}>\s*Trusted By Our Major Clients\s*<\/h4>\s*<div style=\{\{\s*width:\s*"25px",\s*height:\s*"1px",\s*background:\s*"var\(--primary-red\)"\s*\}\}><\/div>\s*<\/div>/;

const newSection = `{/* Tightly Integrated Major Clients Section */}
            <div 
              style={{ 
                width: "100%", 
                marginTop: "40px", 
                paddingTop: "60px", 
                borderTop: "1px solid var(--border-soft)", 
                position: "relative", 
                zIndex: 2 
              }}
            >
              <div style={{ marginBottom: "50px", maxWidth: "800px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Trusted Partners</h4>
                </div>
                <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", lineHeight: 1.1, marginBottom: "20px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>Our Major <span className="text-gradient" style={{ fontWeight: 300 }}>Clients</span></h2>
                <p style={{ fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "30px", lineHeight: 1.8 }}>
                  Collaborating with leading government authorities and international bodies to deliver nation-building infrastructure projects across Sri Lanka.
                </p>
              </div>`;

content = content.replace(regex, newSection);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Replaced successfully');
