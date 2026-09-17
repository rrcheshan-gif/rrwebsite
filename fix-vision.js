const fs = require('fs');

const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Change the background image to a nice unused one: /images/page-headers/about-story.jpg
content = content.replace(/url\('\/images\/IMAGES\/Gandara\/gandara-bg\.jpeg'\)/g, "url('/images/page-headers/about-story.jpg')");

// 2. Redesign the Vision and Mission cards
const redesign = `      {/* Vision & Mission Redesign */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", backgroundColor: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: isMobile ? "40px" : "60px" }}>
          
          {/* Vision Block */}
          <Reveal direction="up">
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "40px", alignItems: "center", backgroundColor: "var(--white)", borderRadius: "24px", padding: isMobile ? "30px" : "50px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)", border: "1px solid var(--border-soft)" }}>
              <div style={{ flex: "0 0 auto", width: isMobile ? "80px" : "120px", height: isMobile ? "80px" : "120px", borderRadius: "50%", backgroundColor: "rgba(229, 57, 53, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Eye size={isMobile ? 40 : 60} color="var(--primary-red)" />
              </div>
              <div style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}>
                <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "16px" }}>Our Vision</h2>
                <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", margin: 0, fontWeight: 400 }}>
                  "To be a leading force in Sri Lanka's infrastructure development, delivering world-class engineering solutions that connect communities, enable progress, and build a stronger, more resilient future."
                </p>
                <div style={{ marginTop: "20px", width: "40px", height: "3px", backgroundColor: "var(--primary-red)", margin: isMobile ? "20px auto 0" : "20px 0 0" }}></div>
              </div>
            </div>
          </Reveal>

          {/* Mission Block */}
          <Reveal direction="up" delay={200}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row-reverse", gap: "40px", alignItems: "center", backgroundColor: "var(--white)", borderRadius: "24px", padding: isMobile ? "30px" : "50px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)", border: "1px solid var(--border-soft)" }}>
              <div style={{ flex: "0 0 auto", width: isMobile ? "80px" : "120px", height: isMobile ? "80px" : "120px", borderRadius: "50%", backgroundColor: "rgba(229, 57, 53, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Target size={isMobile ? 40 : 60} color="var(--primary-red)" />
              </div>
              <div style={{ flex: 1, textAlign: isMobile ? "center" : "right" }}>
                <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "16px" }}>Our Mission</h2>
                <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", margin: 0, fontWeight: 400 }}>
                  "To deliver complex infrastructure and heavy civil engineering projects with excellence, innovation, and integrity-combining experienced people, advanced technology, integrated resources, uncompromising quality, and a strong commitment to safety, sustainability, and client satisfaction."
                </p>
                <div style={{ marginTop: "20px", width: "40px", height: "3px", backgroundColor: "var(--primary-red)", margin: isMobile ? "20px auto 0" : "20px 0 0 100%", transform: isMobile ? "none" : "translateX(-100%)" }}></div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
`;

const regex = /\{\/\*\s*Vision\s*&\s*Mission\s*Cards\s*\*\/\}[\s\S]*?(?=\{\/\*\s*Brand\s*Statement\s*Banner\s*\*\/})/i;
content = content.replace(regex, redesign);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Vision-Mission Page');
