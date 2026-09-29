const fs = require('fs');
let content = fs.readFileSync('src/app/training/page.tsx', 'utf8');

const newSection = `
            {/* Initiative Item 2: ERP Development */}
            <div className="hover-lift" style={{ background: "var(--white)", borderRadius: "24px", border: "1px solid var(--border-soft)", overflow: "hidden", display: "flex", flexDirection: isMobile ? "column" : "row", boxShadow: "0 15px 40px rgba(0,0,0,0.05)" }}>
              {/* Left Content */}
              <div style={{ flex: 1, padding: isMobile ? "30px 20px" : "50px" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.8rem", background: "var(--border-soft)", color: "var(--text-dark)", padding: "6px 15px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>System Development</span>
                    <span style={{ fontSize: "0.8rem", background: "var(--primary-red)", color: "white", padding: "6px 15px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>Ongoing Project</span>
                 </div>
                 
                 <h3 style={{ fontFamily: "var(--font-heading)", fontSize: isMobile ? "1.6rem" : "2rem", color: "var(--text-dark)", marginBottom: "20px", lineHeight: 1.3 }}>
                   In-House Development of <br/>
                   <span style={{ color: "var(--primary-red)" }}>Custom ERP System</span>
                 </h3>
                 
                 <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "30px" }}>
                   As part of our commitment to operational excellence, RR Construction is actively developing a custom Enterprise Resource Planning (ERP) system in-house. Our team is undergoing intensive training and collaborative development sessions to build a platform tailored specifically to streamline our engineering operations, inventory management, and financial workflows.
                 </p>
                 
                 <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "20px" }}>
                   {[
                     "Custom Workflow Integration",
                     "Real-time Project Tracking",
                     "Centralized Resource Management",
                     "Collaborative System Design"
                   ].map((item, i) => (
                     <div key={"erp-" + i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-dark)", fontWeight: 700, fontSize: "0.95rem" }}>
                       <CheckCircle size={20} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: "2px" }} /> 
                       <span>{item}</span>
                     </div>
                   ))}
                 </div>
              </div>
              
              {/* Right Graphic/Logo area */}
                <div style={{ width: isMobile ? "100%" : "40%", position: "relative", minHeight: isMobile ? "300px" : "auto", display: "flex" }}>
                  <img 
                    src="/images/training/erp-training.jpg" 
                    alt="ERP System Development Training at RR Construction" 
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} 
                  />
                </div>
              </div>
`;

content = content.replace('{/* Space for future items */}', newSection + '\n\n              {/* Space for future items */}');

fs.writeFileSync('src/app/training/page.tsx', content, 'utf8');
console.log("ERP section added.");
