const fs = require('fs');

let page = fs.readFileSync('src/app/about/leadership/page.tsx', 'utf8');

// Change hero title
page = page.replace(
  'Board of <span style={{ color: "var(--primary-red)" }}>Management</span>',
  'Board of <span style={{ color: "var(--primary-red)" }}>Directors</span>'
);

// Split leadership into two sections
const oldSectionRegex = /<div style={{ marginBottom: "50px" }}>\s*<h2[^>]*>Executive Management<\/h2>[\s\S]*?<\/div>[\s\S]*?<div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>\s*\{COMPANY_DATA\.leadership\.map\(\(leader, idx\) => \([\s\S]*?\}\)\)\s*<\/div>/;

const newSections = \
          {/* Board of Directors Section */}
          <div style={{ marginBottom: "50px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px 0" }}>Board of Directors</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", borderRadius: "2px" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px", marginBottom: "60px" }}>
            {COMPANY_DATA.leadership.filter(l => l.role.includes('Director')).map((leader, idx) => (
              <div key={idx} style={{ display: "flex", gap: "30px", background: "var(--white)", padding: isMobile ? "30px 20px" : "40px", borderRadius: "24px", border: "1px solid var(--border-soft)", alignItems: "center", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left" }}>
                {leader.image ? (
                  <div style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "4px solid var(--white)" }}>
                    <img src={leader.image} alt={leader.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  <div style={{ width: "120px", height: "120px", background: "rgba(229, 57, 53, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "4px solid var(--white)" }}>
                    <User size={50} color="var(--primary-red)" />
                  </div>
                )}
                <div>
                  <h3 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 5px 0" }}>{leader.name}</h3>
                  <p style={{ color: "var(--primary-red)", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 10px 0" }}>{leader.role}</p>
                  <p style={{ color: "var(--text-light)", fontSize: "1.05rem", margin: 0 }}>{leader.qual}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Executive Management Section */}
          <div style={{ marginBottom: "50px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px 0" }}>Executive Management</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", borderRadius: "2px" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>
            {COMPANY_DATA.leadership.filter(l => !l.role.includes('Director')).map((leader, idx) => (
              <div key={idx} style={{ display: "flex", gap: "30px", background: "var(--white)", padding: isMobile ? "30px 20px" : "40px", borderRadius: "24px", border: "1px solid var(--border-soft)", alignItems: "center", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left" }}>
                {leader.image ? (
                  <div style={{ width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "4px solid var(--white)" }}>
                    <img src={leader.image} alt={leader.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  <div style={{ width: "120px", height: "120px", background: "rgba(229, 57, 53, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", border: "4px solid var(--white)" }}>
                    <User size={50} color="var(--primary-red)" />
                  </div>
                )}
                <div>
                  <h3 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 5px 0" }}>{leader.name}</h3>
                  <p style={{ color: "var(--primary-red)", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 10px 0" }}>{leader.role}</p>
                  <p style={{ color: "var(--text-light)", fontSize: "1.05rem", margin: 0 }}>{leader.qual}</p>
                </div>
              </div>
            ))}
          </div>
\;

page = page.replace(oldSectionRegex, newSections);
fs.writeFileSync('src/app/about/leadership/page.tsx', page, 'utf8');
console.log('Fixed leadership page.');
