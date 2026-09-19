const fs = require('fs');
let content = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

const regexMilestone = /<div style=\{\{\s*display: 'flex',\s*alignItems: 'center',\s*gap: '15px',\s*marginBottom: '30px',\s*marginTop: '20px'\s*\}\}>\s*<div style=\{\{.*?\}\}><\/div>\s*<h2 style=\{\{.*?\}\}>\s*Milestone Projects\s*<\/h2>\s*<\/div>/m;

const newMilestone = `<div style={{ textAlign: "left", marginBottom: "30px", marginTop: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>HIGHLIGHTS</h4>
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 5vw, 2.4rem)", color: "var(--text-dark)", margin: 0, textAlign: "left", fontWeight: 800 }}>
                  Milestone <span className="text-gradient" style={{ fontWeight: 300 }}>Projects</span>
                </h2>
              </div>`;

const regexCompleted = /<div style=\{\{\s*display: 'flex',\s*alignItems: 'center',\s*gap: '15px',\s*marginBottom: '30px'\s*\}\}>\s*<div style=\{\{.*?\}\}><\/div>\s*<h2 style=\{\{.*?\}\}>\s*All Completed Projects\s*<\/h2>\s*<\/div>/m;

const newCompleted = `<div style={{ textAlign: "left", marginBottom: "30px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>PORTFOLIO</h4>
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 5vw, 2.4rem)", color: "var(--text-dark)", margin: 0, textAlign: "left", fontWeight: 800 }}>
                  All Completed <span className="text-gradient" style={{ fontWeight: 300 }}>Projects</span>
                </h2>
              </div>`;

if (regexMilestone.test(content)) {
    content = content.replace(regexMilestone, newMilestone);
}

if (regexCompleted.test(content)) {
    content = content.replace(regexCompleted, newCompleted);
}

fs.writeFileSync('src/app/projects/page.tsx', content, 'utf8');
console.log('Successfully updated Milestone and Completed Projects headings');
