const fs = require('fs');
const file = 'src/app/about/goals-and-targets/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Grid template already changed via powershell
// 2. Replace the entire map function safely

const newMap = `            {strategicGoals.map((goal, idx) => (
              <div 
                key={idx} 
                className="hover-lift"
                style={{ 
                  background: "var(--white)", 
                  padding: isMobile ? "30px 20px" : "40px 45px", 
                  borderRadius: "24px", 
                  boxShadow: "0 10px 40px rgba(0,0,0,0.03)", 
                  border: "1px solid var(--border-soft)",
                  borderTop: "4px solid var(--primary-red)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{ position: "absolute", top: "-15px", right: "20px", fontSize: "7rem", fontWeight: 900, color: "rgba(229, 57, 53, 0.04)", fontFamily: "var(--font-heading)", lineHeight: 1, pointerEvents: "none", zIndex: 0 }}>
                  {goal.num}
                </div>
                
                <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(229, 57, 53, 0.1)", color: "var(--primary-red)", width: "55px", height: "55px", borderRadius: "16px", fontSize: "1.4rem", fontWeight: 800, fontFamily: "var(--font-heading)", flexShrink: 0 }}>
                    {goal.num}
                  </div>
                  <h3 style={{ fontSize: "1.35rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, lineHeight: 1.3 }}>
                    {goal.title}
                  </h3>
                </div>
                
                <p style={{ position: "relative", zIndex: 1, color: "var(--text-light)", lineHeight: 1.7, margin: "10px 0 25px 0", fontSize: "1.1rem" }}>
                  {goal.desc}
                </p>
                
                <ul style={{ position: "relative", zIndex: 1, listStyle: "none", padding: 0, margin: "auto 0 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {goal.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-dark)", fontSize: "0.95rem", lineHeight: 1.5, fontWeight: 600 }}>
                      <CheckCircle size={20} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}`;

const mapStart = '{strategicGoals.map(';
const mapEnd = '))}';
const startIndex = content.indexOf(mapStart);
const endIndex = content.indexOf('</div>', content.indexOf(mapEnd, startIndex)) + 6;

if (startIndex !== -1 && endIndex !== -1) {
  // Wait, finding the end index of the map is tricky since there are multiple nested divs.
  // We can just use a regex.
  const regex = /\{strategicGoals\.map\([\s\S]*?\)\)\}/;
  content = content.replace(regex, newMap);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Replaced map successfully via regex');
}
