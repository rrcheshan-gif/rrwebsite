const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const replacement = \<div style={{ flex: "1.2", minWidth: "300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <div style={{ width: "40px", height: "3px", background: "var(--primary-red)" }}></div>
                <h2 style={{ color: "var(--primary-red)", fontWeight: 800, letterSpacing: "2px",  margin: 0, fontSize: "1rem", fontFamily: "var(--font-heading)", textTransform: "uppercase" }}>Company Overview</h2>
              </div>
              <h3 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", margin: "0 0 20px", fontFamily: "var(--font-heading)", lineHeight: 1.2, fontWeight: 800 }}>
                A Legacy of Engineering <span style={{ color: "var(--primary-red)" }}>Excellence.</span>
              </h3>
              
              <div style={{ background: "rgba(229, 57, 53, 0.05)", padding: "35px 30px", borderRadius: "20px", borderLeft: "4px solid var(--primary-red)", position: "relative", marginBottom: "30px" }}>
                  <span style={{ position: "absolute", top: "10px", left: "15px", fontSize: "5rem", color: "rgba(229, 57, 53, 0.1)", fontFamily: "Georgia, serif", lineHeight: 1, zIndex: 0 }}>"</span>
                  <p style={{ color: "var(--text-dark)", lineHeight: 1.8, fontSize: "1.1rem", position: "relative", zIndex: 1, fontStyle: "italic", fontWeight: 500, margin: 0 }}>
                    By continuously developing new capabilities to overcome emerging challenges, introducing structural changes to the organization, and creating a strong culture of teamwork combined with professional methodologies, we have grown into one of the country's leading infrastructure developers. Our unwavering commitment to precision, health and safety, and international quality standards allows us to execute complex engineering projects efficiently, maintaining our reputation as a trusted, uncompromising leader.
                  </p>
                  
                  <div style={{ marginTop: "25px", display: "flex", alignItems: "center", gap: "15px", position: "relative", zIndex: 1 }}>
                    <div>
                      <h4 style={{ color: "var(--text-dark)", fontSize: "1.3rem", fontWeight: 800, margin: "0 0 5px", fontFamily: "var(--font-heading)" }}>Mr. Ranjith Senadhera</h4>
                      <p style={{ color: "var(--primary-red)", margin: 0, fontWeight: 600, fontSize: "0.95rem" }}>Managing Director, RR Construction (Pvt) Ltd</p>
                    </div>
                  </div>
              </div>

              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                Founded in {COMPANY_DATA.established}, {COMPANY_DATA.name} stands at the forefront of Sri Lanka's heavy civil engineering and infrastructure development sector. Over the past {COMPANY_DATA.yearsOfExcellence} years, we have evolved from a specialized regional contractor into a fully integrated national engineering powerhouse. Our journey is defined by a systematic expansion of our capabilities, allowing us to deliver complex, large-scale infrastructure solutions that serve as the backbone of national progress.
              </p>
              
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
                By integrating an expansive, self-owned fleet of state-of-the-art heavy machinery with the technical acumen of our elite engineering divisions, we consistently execute high-stakes projects across diverse domains—including maritime structures, national highways, complex bridges, geotechnical mitigation, and major water infrastructure. As a 100% Sri Lankan-owned enterprise, we pride ourselves on our end-to-end project management capabilities, ensuring that every phase is executed with uncompromising precision, rigorous safety standards, and adherence to international quality protocols.
              </p>
              
              <div>
                <Link href="/about/history" style={{ color: "var(--text-dark)", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", borderBottom: "2px solid var(--primary-red)", paddingBottom: "5px", transition: "color 0.3s" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--primary-red)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--text-dark)"}>
                  Read our full History & Milestones <ArrowRight size={18} color="var(--primary-red)"/>
                </Link>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 'min(100%, 350px)', position: "relative" }}>\;

const startIdx = content.indexOf('<div style={{ flex: "1.2", minWidth: "300px" }}>');
const endIdx = content.indexOf('<div style={{ flex: 1, minWidth: \\'min(100%, 350px)\\', position: "relative" }}>') + '<div style={{ flex: 1, minWidth: \\'min(100%, 350px)\\', position: "relative" }}>'.length;

if (startIdx !== -1 && endIdx !== -1 && startIdx < endIdx) {
    let newContent = content.substring(0, startIdx) + replacement + content.substring(endIdx);
    // Note: I accidentally used 'Company Overview' instead of 'Introduction & Vision' earlier. The user asked me to change it, so I am putting 'Company Overview' here.
    fs.writeFileSync('src/app/about/company-overview/page.tsx', newContent, 'utf8');
    console.log('Successfully replaced layout cleanly!');
} else {
    console.log('Could not find boundaries.');
}
