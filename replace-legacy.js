const fs = require('fs');

const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldSectionRegex = /<div style=\{\{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" \}\}>\s*<div style=\{\{ width: "40px", height: "1px", background: "var\(--primary-red\)" \}\}><\/div>\s*<h4[^>]*>Our Legacy<\/h4>[\s\S]*?(?=\{\/\* Tightly Integrated Major Clients Footer Strip \*\/)/;

const newSection = `<div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px",  margin: 0, fontSize: "0.9rem" }}>LATEST NEWS & UPDATES</h4>
              </div>
              <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", lineHeight: 1.1, marginBottom: "20px", color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}>Company <span className="text-gradient" style={{ fontWeight: 300 }}>Highlights</span></h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-light)", marginBottom: "30px", lineHeight: 1.8 }}>
                Stay updated with our newest technological acquisitions, project milestones, and heavy civil engineering achievements across Sri Lanka.
              </p>
              <Link href="/news" className="btn-glass-red" style={{ display: "inline-flex", textDecoration: "none", alignItems: "center", gap: "8px" }}>View All News <ArrowRight size={18} /></Link>
            </div>
            
            <div style={{ flex: 1, minWidth: 'min(100%, 350px)', position: "relative", marginTop: "20px" }}>
                <div className="glass-panel hover-lift" style={{ borderRadius: "20px", overflow: "hidden", background: "var(--white)", border: "1px solid var(--border-soft)", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
                  <div style={{ position: "relative", height: "240px", width: "100%", overflow: "hidden" }}>
                    <img src="/images/news/wirtgen-milling-machine/img-1.jpg" alt="Wirtgen W 200 F Milling Machine" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="img-hover-zoom" />
                    <div style={{ position: "absolute", top: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "6px 14px", borderRadius: "30px", fontSize: "0.85rem", fontWeight: "bold", letterSpacing: "1px" }}>Machinery & Technology</div>
                  </div>
                  <div style={{ padding: "30px" }}>
                    <div style={{ color: "var(--text-light)", fontSize: "0.9rem", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>September 17, 2026</span>
                    </div>
                    <h3 style={{ fontSize: "1.3rem", color: "var(--text-dark)", marginBottom: "12px", lineHeight: 1.4, fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                      RR Construction Acquires Sri Lanka's First Brand New Wirtgen Milling Machine
                    </h3>
                    <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "25px" }}>
                      Setting a new benchmark in the local construction industry, RR Construction has successfully imported the first-ever brand new Wirtgen W 200 F milling machine to Sri Lanka.
                    </p>
                    <Link href="/news/first-brand-new-wirtgen-w200f-milling-machine-sri-lanka" style={{ color: "var(--primary-red)", fontWeight: "bold", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px" }}>Read Full Article <ArrowRight size={16} /></Link>
                  </div>
                </div>
              </div>
            </div>
            
            `;

content = content.replace(oldSectionRegex, newSection);
fs.writeFileSync(file, content, 'utf8');
console.log('Replaced Our Legacy with Latest News');
