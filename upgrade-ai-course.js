const fs = require('fs');
const file = 'src/app/training/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The old Special Initiatives section
const regex = /\{\/\* Special Initiatives Section \*\/\}[\s\S]*?<\/section>/;

const newSection = `{/* Special Initiatives Section */}
      <section style={{ padding: "0 20px 80px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "50px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", margin: "0 0 15px 0" }}>Special <span style={{ color: "var(--primary-red)" }}>Initiatives</span></h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.15rem", margin: 0 }}>Discover the extra steps we take to empower our team and stay ahead of industry curves.</p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            
            {/* Initiative Item 1: Coursera AI */}
            <div className="hover-lift" style={{ background: "var(--white)", borderRadius: "24px", border: "1px solid var(--border-soft)", overflow: "hidden", display: "flex", flexDirection: isMobile ? "column" : "row", boxShadow: "0 15px 40px rgba(0,0,0,0.05)" }}>
              {/* Left Content */}
              <div style={{ flex: 1, padding: isMobile ? "30px 20px" : "50px" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.8rem", background: "rgba(0, 86, 210, 0.1)", color: "#0056D2", padding: "6px 15px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>Corporate Training</span>
                    <span style={{ fontSize: "0.8rem", background: "var(--primary-red)", color: "white", padding: "6px 15px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>Upcoming Program</span>
                 </div>
                 
                 <h3 style={{ fontFamily: "var(--font-heading)", fontSize: isMobile ? "1.6rem" : "2rem", color: "var(--text-dark)", marginBottom: "20px", lineHeight: 1.3 }}>
                   Empowering Our Team with <br/>
                   <span style={{ color: "#0056D2" }}>Coursera AI Certification</span>
                 </h3>
                 
                 <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "30px" }}>
                   At RR Construction, we are taking a bold step into the future. We are launching a comprehensive <strong>Artificial Intelligence & Machine Learning</strong> training program for our staff through the global learning platform, Coursera. This initiative ensures our workforce remains at the absolute cutting edge of construction technology, ready to integrate AI-driven efficiencies into our engineering operations.
                 </p>
                 
                 <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "20px" }}>
                   {[
                     "AI-Driven Project Management",
                     "Automated Construction Workflows",
                     "Data Analytics & Safety Prediction",
                     "Generative AI for Planning"
                   ].map((item, i) => (
                     <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-dark)", fontWeight: 700, fontSize: "0.95rem" }}>
                       <CheckCircle size={20} color="#0056D2" style={{ flexShrink: 0, marginTop: "2px" }} /> 
                       <span>{item}</span>
                     </div>
                   ))}
                 </div>
              </div>
              
              {/* Right Graphic/Logo area */}
              <div style={{ width: isMobile ? "100%" : "40%", background: "linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "50px 30px", borderLeft: isMobile ? "none" : "1px solid var(--border-soft)", borderTop: isMobile ? "1px solid var(--border-soft)" : "none" }}>
                 
                 {/* Coursera simulated logo */}
                 <div style={{ fontSize: isMobile ? "3rem" : "3.5rem", fontWeight: 900, color: "#0056D2", letterSpacing: "-2px", fontFamily: "Arial, sans-serif", marginBottom: "25px" }}>
                   coursera
                 </div>
                 
                 <h4 style={{ textAlign: "center", color: "#003b8e", fontWeight: 800, fontSize: "1.2rem", lineHeight: 1.5, margin: 0, fontFamily: "var(--font-heading)" }}>
                   Global Standard <br/>Tech Education
                 </h4>
                 
                 <p style={{ textAlign: "center", color: "#475569", fontSize: "0.95rem", marginTop: "15px", maxWidth: "250px" }}>
                   Equipping our people with world-class tech skills to engineer tomorrow.
                 </p>
                 
                 {/* Decorative elements */}
                 <div style={{ marginTop: "40px", display: "flex", gap: "12px" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0056D2", opacity: 0.2 }}></div>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0056D2", opacity: 0.5 }}></div>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#0056D2", opacity: 1 }}></div>
                 </div>
              </div>
            </div>

            {/* Space for future items */}

          </div>
        </div>
      </section>`;

content = content.replace(regex, newSection);

fs.writeFileSync(file, content, 'utf8');
console.log('Upgraded AI Course section with Coursera branding and detailed layout');
