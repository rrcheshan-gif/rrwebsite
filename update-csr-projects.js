const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/social-responsibility/page.tsx', 'utf8');

const newSection = 
      {/* CSR Initiatives Showcase */}
      <section style={{ padding: "80px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0" }}>
              Our CSR <span style={{ color: "var(--primary-red)" }}>Initiatives</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
              Real impact is measured through action. Explore some of our recent community and social responsibility projects.
            </p>
          </div>

          {/* Initiative Item */}
          <div style={{ background: "var(--white)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", border: "1px solid var(--border-soft)", marginBottom: "40px" }}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
              <div style={{ flex: 1, padding: isMobile ? "30px" : "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.9rem", fontWeight: 700, alignSelf: "flex-start", marginBottom: "20px" }}>Employee Welfare</span>
                <h3 style={{ fontSize: "2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                  Honoring Our Foundation: A Gift to Our First Employee
                </h3>
                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                  At RR Construction, our extraordinary growth over the past three decades is built entirely upon the dedication and hard work of our people. As a company that values loyalty and long-term commitment, we firmly believe that our employees are our greatest asset.
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "justify" }}>
                  As part of our ongoing social responsibility and employee welfare initiatives, we recently had the profound honor of presenting a special token of gratitude to our very first employee. This gift serves as a symbol of our deep appreciation for their unwavering dedication, reflecting our core belief that the people who laid the foundation of this company will always remain at the heart of its success.
                </p>
              </div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2px", background: "var(--border-soft)" }}>
                <img src="/CSR/csr-first-employee-1.jpg" alt="CSR Initiative 1" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "150px" : "250px" }} />
                <img src="/CSR/csr-first-employee-2.jpg" alt="CSR Initiative 2" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "150px" : "250px" }} />
                <img src="/CSR/csr-first-employee-3.jpg" alt="CSR Initiative 3" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "150px" : "250px" }} />
                <img src="/CSR/csr-first-employee-4.jpg" alt="CSR Initiative 4" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "150px" : "250px" }} />
              </div>
            </div>
          </div>
          
        </div>
      </section>
;

content = content.replace('    </div>\n  );\n}', newSection + '\n    </div>\n  );\n}');

fs.writeFileSync('src/app/sustainability/social-responsibility/page.tsx', content, 'utf8');
