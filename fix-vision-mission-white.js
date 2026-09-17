const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `                    {/* Vision Block */}
          <Reveal direction="left">
            <div className="hover-lift" style={{ 
              position: "relative",
              backgroundColor: "var(--white)", 
              borderRadius: "32px", 
              padding: isMobile ? "40px 30px" : "70px 60px", 
              boxShadow: "0 20px 60px rgba(0,0,0,0.04)", 
              border: "1px solid var(--border-soft)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1
            }}>
              <div style={{ position: "absolute", top: "-50px", right: "-50px", opacity: 0.03, zIndex: -1, pointerEvents: "none" }}>
                <Eye size={300} />
              </div>
              
              <div style={{ width: "80px", height: "80px", borderRadius: "24px", backgroundColor: "rgba(229, 57, 53, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
                <Eye size={40} color="var(--primary-red)" />
              </div>
              
              <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "25px", letterSpacing: "-1px" }}>Our Vision</h2>
              
              <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "var(--text-light)", margin: 0, fontWeight: 500, position: "relative", paddingLeft: "25px", borderLeft: "4px solid var(--primary-red)" }}>
                To be a leading force in Sri Lanka's infrastructure development, delivering world-class engineering solutions that connect communities, enable progress, and build a stronger, more resilient future.
              </p>
            </div>
          </Reveal>

          {/* Mission Block */}
          <Reveal direction="right" delay={200}>
            <div className="hover-lift" style={{ 
              position: "relative",
              backgroundColor: "var(--white)", 
              borderRadius: "32px", 
              padding: isMobile ? "40px 30px" : "70px 60px", 
              boxShadow: "0 20px 60px rgba(0,0,0,0.04)", 
              border: "1px solid var(--border-soft)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1
            }}>
              <div style={{ position: "absolute", top: "-50px", right: "-50px", opacity: 0.03, zIndex: -1, pointerEvents: "none" }}>
                <Target size={300} />
              </div>
              
              <div style={{ width: "80px", height: "80px", borderRadius: "24px", backgroundColor: "rgba(229, 57, 53, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
                <Target size={40} color="var(--primary-red)" />
              </div>
              
              <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "25px", letterSpacing: "-1px" }}>Our Mission</h2>
              
              <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "var(--text-light)", margin: 0, fontWeight: 500, position: "relative", paddingLeft: "25px", borderLeft: "4px solid var(--primary-red)" }}>
                To deliver complex infrastructure and heavy civil engineering projects with excellence, innovation, and integrity—combining experienced people, advanced technology, integrated resources, uncompromising quality, and a strong commitment to safety, sustainability, and client satisfaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
  {/* Our Direction Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "120px 20px", background: "var(--bg-light)", position: "relative" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <div className="hover-lift" style={{ 
              position: "relative",
              backgroundColor: "var(--white)", 
              borderRadius: "32px", 
              padding: isMobile ? "40px 30px" : "70px 60px", 
              boxShadow: "0 20px 60px rgba(0,0,0,0.04)", 
              border: "1px solid var(--border-soft)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1
            }}>
              <div style={{ position: "absolute", top: "-50px", right: "-50px", opacity: 0.03, zIndex: -1, pointerEvents: "none" }}>
                <Compass size={400} />
              </div>
              
              <div style={{ width: "80px", height: "80px", borderRadius: "24px", backgroundColor: "rgba(229, 57, 53, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
                <Compass size={40} color="var(--primary-red)" />
              </div>
              
              <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "25px", letterSpacing: "-1px" }}>Our Direction</h2>
              
              <div style={{ position: "relative", paddingLeft: isMobile ? "20px" : "30px", borderLeft: "4px solid var(--primary-red)" }}>
                <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "25px", fontWeight: 500 }}>
                  RR Construction (Pvt) Ltd continues to strengthen its position in Sri Lanka's infrastructure sector through integrated heavy civil engineering capabilities covering <Link href="/services/road-construction" style={{ color: "var(--primary-red)", textDecoration: "underline", fontWeight: "bold" }}>roads and highways</Link>, <Link href="/services/bridge-construction" style={{ color: "var(--primary-red)", textDecoration: "underline", fontWeight: "bold" }}>bridges</Link>, <Link href="/services/railway-civil-works" style={{ color: "var(--primary-red)", textDecoration: "underline", fontWeight: "bold" }}>railway construction</Link>, <Link href="/services/maritime-construction" style={{ color: "var(--primary-red)", textDecoration: "underline", fontWeight: "bold" }}>maritime and marine infrastructure</Link>, <Link href="/services/water-infrastructure" style={{ color: "var(--primary-red)", textDecoration: "underline", fontWeight: "bold" }}>water infrastructure</Link>, <Link href="/services/landslide-mitigation" style={{ color: "var(--primary-red)", textDecoration: "underline", fontWeight: "bold" }}>geotechnical works</Link> and other major civil engineering projects.
                </p>
                <p style={{ color: "var(--text-dark)", fontSize: "1.3rem", fontWeight: 800, fontFamily: "var(--font-heading)", margin: 0, letterSpacing: "0.5px" }}>
                  Our vision guides where we are going, while our mission defines how we deliver value along the way.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>`;

const pattern = /\{\/\* Vision Block \*\/\}[\s\S]*?<\/section>/;
content = content.replace(pattern, replacement);

fs.writeFileSync(file, content, 'utf8');
