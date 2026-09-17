const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `          {/* Vision Block */}
          <Reveal direction="left">
            <div className="hover-lift" style={{ 
              position: "relative",
              backgroundColor: "var(--text-dark)", 
              borderRadius: "32px", 
              padding: isMobile ? "40px 30px" : "70px 60px", 
              boxShadow: "0 30px 60px rgba(15, 23, 42, 0.2)", 
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1
            }}>
              <div style={{ position: "absolute", top: "-50px", right: "-50px", opacity: 0.05, zIndex: -1, pointerEvents: "none" }}>
                <Eye size={300} color="#fff" />
              </div>
              
              <div style={{ width: "80px", height: "80px", borderRadius: "24px", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", backdropFilter: "blur(10px)" }}>
                <Eye size={40} color="#ffffff" />
              </div>
              
              <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "#ffffff", marginBottom: "25px", letterSpacing: "-1px" }}>Our Vision</h2>
              
              <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", margin: 0, fontWeight: 400, position: "relative", paddingLeft: "25px", borderLeft: "4px solid var(--primary-red)" }}>
                To be a leading force in Sri Lanka's infrastructure development, delivering world-class engineering solutions that connect communities, enable progress, and build a stronger, more resilient future.
              </p>
            </div>
          </Reveal>`;

const pattern = /\{\/\* Vision Block \*\/\}.*?<\/Reveal>/s;
content = content.replace(pattern, replacement);

fs.writeFileSync(file, content, 'utf8');
