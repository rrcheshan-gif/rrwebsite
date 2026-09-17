const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `            {/* Vision & Mission Redesign */}
      <section style={{ padding: isMobile ? "60px 20px" : "120px 20px", backgroundColor: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "30px" : "40px" }}>
          
          {/* Vision Block */}
          <Reveal direction="left">
            <div className="hover-lift" style={{ 
              position: "relative",
              backgroundColor: "var(--white)", 
              borderRadius: "32px", 
              padding: isMobile ? "40px 30px" : "70px 60px", 
              boxShadow: "0 20px 60px rgba(0,0,0,0.03)", 
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
              
              <div style={{ width: "80px", height: "80px", borderRadius: "24px", backgroundColor: "rgba(229, 57, 53, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", border: "1px solid rgba(229, 57, 53, 0.2)" }}>
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
                <Target size={300} color="#fff" />
              </div>
              
              <div style={{ width: "80px", height: "80px", borderRadius: "24px", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", backdropFilter: "blur(10px)" }}>
                <Target size={40} color="#ffffff" />
              </div>
              
              <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "#ffffff", marginBottom: "25px", letterSpacing: "-1px" }}>Our Mission</h2>
              
              <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", margin: 0, fontWeight: 400, position: "relative", paddingLeft: "25px", borderLeft: "4px solid var(--primary-red)" }}>
                To deliver complex infrastructure and heavy civil engineering projects with excellence, innovation, and integrity—combining experienced people, advanced technology, integrated resources, uncompromising quality, and a strong commitment to safety, sustainability, and client satisfaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
  {/* Brand Statement Banner */}`;

const startIndex = content.indexOf('{/* Vision & Mission Redesign */}');
const endIndex = content.indexOf('{/* Brand Statement Banner */}');

if(startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + replacement + content.substring(endIndex + '{/* Brand Statement Banner */}'.length);
  fs.writeFileSync(file, content, 'utf8');
} else {
  console.log("Could not find boundaries");
}
