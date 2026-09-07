const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = <div style={{ position: "absolute", bottom: "-30px", left: "10%", background: "var(--white)", padding: "20px 40px", borderRadius: "30px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", zIndex: 3, display: "flex", gap: "30px", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, color: "var(--primary-red)" }}>{COMPANY_DATA.yearsOfExcellence}</div>
                      <div style={{ textAlign: "left" }}>
                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary-red)", fontWeight: 800 }}>Years of</h4>
                        <p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Excellence</p>
                      </div>
                    </div>
                    <div style={{ width: "2px", height: "40px", backgroundColor: "rgba(211, 47, 47, 0.2)" }}></div>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, color: "var(--primary-red)" }}>{COMPANY_DATA.completedProjects}</div>
                      <div style={{ textAlign: "left" }}>
                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary-red)", fontWeight: 800 }}>Completed</h4>
                        <p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Projects</p>
                      </div>
                    </div>
                  </div>;

const newBlock = <div style={{ position: "absolute", bottom: "-30px", left: "10%", background: "var(--white)", padding: "20px 40px", borderRadius: "30px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", zIndex: 3, display: "flex", gap: "30px", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-heading)", lineHeight: 1, color: "var(--primary-red)" }}>{COMPANY_DATA.yearsOfExcellence}</div>
                      <div style={{ textAlign: "left" }}>
                        <h4 style={{ margin: 0, fontSize: "0.9rem", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary-red)", fontWeight: 800 }}>Years of</h4>
                        <p style={{ color: "var(--text-dark)", margin: 0, fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase" }}>Excellence</p>
                      </div>
                    </div>
                  </div>;

if (content.includes('backgroundColor: "rgba(211, 47, 47, 0.2)"')) {
    content = content.replace(oldBlock, newBlock);
    fs.writeFileSync('src/app/page.tsx', content, 'utf8');
    console.log('Removed second stat and separator');
} else {
    console.log('Block not found');
}
