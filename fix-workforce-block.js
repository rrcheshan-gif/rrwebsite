const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, color: "var(--primary-red)" }}>{COMPANY_DATA.workforce}</div>
                      <div style={{ textAlign: "left" }}>
                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary-red)", fontWeight: 800 }}>Dedicated</h4>
                        <p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Professionals</p>
                      </div>
                    </div>;

const newBlock = <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, color: "var(--primary-red)" }}>{COMPANY_DATA.completedProjects}</div>
                      <div style={{ textAlign: "left" }}>
                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary-red)", fontWeight: 800 }}>Completed</h4>
                        <p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Projects</p>
                      </div>
                    </div>;

content = content.replace(oldBlock, newBlock);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Workforce block replaced with Completed Projects');
