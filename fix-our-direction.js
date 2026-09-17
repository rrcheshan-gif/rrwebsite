const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Ensure Compass is imported
if (!content.includes('Compass')) {
  content = content.replace(/import {([^}]+)} from 'lucide-react';/, "import { $1, Compass } from 'lucide-react';");
}

const replacement = `{/* Our Direction Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "120px 20px", background: "var(--bg-light)", position: "relative" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <div className="hover-lift" style={{ 
              position: "relative",
              backgroundColor: "var(--text-dark)", 
              borderRadius: "32px", 
              padding: isMobile ? "40px 30px" : "70px 60px", 
              boxShadow: "0 30px 60px rgba(15, 23, 42, 0.2)", 
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1
            }}>
              <div style={{ position: "absolute", top: "-50px", right: "-50px", opacity: 0.05, zIndex: -1, pointerEvents: "none" }}>
                <Compass size={400} color="#fff" />
              </div>
              
              <div style={{ width: "80px", height: "80px", borderRadius: "24px", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", backdropFilter: "blur(10px)" }}>
                <Compass size={40} color="#ffffff" />
              </div>
              
              <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "#ffffff", marginBottom: "25px", letterSpacing: "-1px" }}>Our Direction</h2>
              
              <div style={{ position: "relative", paddingLeft: isMobile ? "20px" : "30px", borderLeft: "4px solid var(--primary-red)" }}>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "25px", fontWeight: 400 }}>
                  RR Construction (Pvt) Ltd continues to strengthen its position in Sri Lanka's infrastructure sector through integrated heavy civil engineering capabilities covering <Link href="/services/road-construction" style={{ color: "#fff", textDecoration: "underline", fontWeight: "bold" }}>roads and highways</Link>, <Link href="/services/bridge-construction" style={{ color: "#fff", textDecoration: "underline", fontWeight: "bold" }}>bridges</Link>, <Link href="/services/railway-civil-works" style={{ color: "#fff", textDecoration: "underline", fontWeight: "bold" }}>railway construction</Link>, <Link href="/services/maritime-construction" style={{ color: "#fff", textDecoration: "underline", fontWeight: "bold" }}>maritime and marine infrastructure</Link>, <Link href="/services/water-infrastructure" style={{ color: "#fff", textDecoration: "underline", fontWeight: "bold" }}>water infrastructure</Link>, <Link href="/services/landslide-mitigation" style={{ color: "#fff", textDecoration: "underline", fontWeight: "bold" }}>geotechnical works</Link> and other major civil engineering projects.
                </p>
                <p style={{ color: "#ffffff", fontSize: "1.3rem", fontWeight: 700, fontFamily: "var(--font-heading)", margin: 0, letterSpacing: "0.5px" }}>
                  Our vision guides where we are going, while our mission defines how we deliver value along the way.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>`;

const pattern = /\{\/\* Our Direction Section \*\/\}[\s\S]*?<\/section>/;
content = content.replace(pattern, replacement);

fs.writeFileSync(file, content, 'utf8');
