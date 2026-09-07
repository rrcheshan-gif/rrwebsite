const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBox = \<div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, color: "var(--primary-red)" }}>{COMPANY_DATA.yearsOfExcellence}</div>
                    <div style={{ textAlign: "left" }}>
                      <h4 style={{ margin: 0, fontSize: "0.9rem", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary-red)", fontWeight: 800 }}>Years of</h4>
                      <p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Excellence</p>
                    </div>
                  </div>\;

const newBox = \<div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, color: "var(--primary-red)" }}>{COMPANY_DATA.yearsOfExcellence}</div>
                      <div style={{ textAlign: "left" }}>
                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary-red)", fontWeight: 800 }}>Years of</h4>
                        <p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Excellence</p>
                      </div>
                    </div>
                    <div style={{ width: "2px", height: "40px", backgroundColor: "rgba(211, 47, 47, 0.2)" }}></div>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, color: "var(--primary-red)" }}>{COMPANY_DATA.workforce}</div>
                      <div style={{ textAlign: "left" }}>
                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary-red)", fontWeight: 800 }}>Dedicated</h4>
                        <p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Workforce</p>
                      </div>
                    </div>
                  </div>\;

content = content.replace(oldBox, newBox);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Floating box updated with workforce stat.');
