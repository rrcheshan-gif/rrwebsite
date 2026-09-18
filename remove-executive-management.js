const fs = require('fs');
const file = 'src/app/about/board-of-directors/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The section is wrapped in <div style={{ marginBottom: "50px" }}> to </div> and the map.
// Let's use a regex to replace everything from <div style={{ marginBottom: "50px" }}> to the end of the section.
// A safe way is to find the exact blocks.
const exactBlock = `          <div style={{ marginBottom: "50px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px 0" }}>Executive Management</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", borderRadius: "2px" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>
            {COMPANY_DATA.leadership.filter(l => !l.role.includes('Director')).map((leader, idx) => (
              <div key={idx} style={{ display: "flex", gap: "30px", background: "var(--white)", padding: isMobile ? "30px 20px" : "40px", borderRadius: "24px", border: "1px solid var(--border-soft)", alignItems: isMobile ? "center" : "stretch", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left" }}>
                {leader.image ? (
                  <div style={{ display: "flex", width: isMobile ? "100%" : "200px", borderRadius: "16px", padding: "6px", background: "var(--bg-light)", border: "1px solid var(--border-soft)", flexShrink: 0, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
                    <img src={leader.image} alt={leader.name} style={{ width: "100%", height: isMobile ? "auto" : "100%", objectFit: "cover", display: "block", borderRadius: "10px" }} />
                  </div>
                ) : (
                  <div style={{ width: isMobile ? "100%" : "200px", height: "200px", background: "rgba(229, 57, 53, 0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                    <User size={60} color="var(--primary-red)" />
                  </div>
                )}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3 style={{ fontSize: "isMobile ? '1.5rem' : '1.8rem'", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 5px 0" }}>{leader.name}</h3>
                  <p style={{ color: "var(--primary-red)", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 10px 0" }}>{leader.role}</p>
                  <p style={{ color: "var(--text-light)", fontSize: "1rem", margin: 0, fontWeight: 600 }}>{leader.qual}</p>
                  {leader.bio && (
                    <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "15px", marginTop: "15px" }}>
                      <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>
                        {leader.bio}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>`;

if (content.includes(exactBlock)) {
    content = content.replace(exactBlock, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully removed Executive Management');
} else {
    console.log('Could not find the exact block');
}
