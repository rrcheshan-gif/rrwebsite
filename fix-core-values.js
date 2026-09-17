const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `              ].map((val, idx) => (
                <Reveal key={idx} delay={idx * 150} direction="up">
                  <div style={{ 
                    background: "var(--white)", 
                    padding: "40px", 
                    borderRadius: "12px", 
                    borderLeft: "5px solid var(--primary-red)", 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    height: "100%",
                    transition: "transform 0.3s ease",
                  }}
                  className="hover-lift"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                      <div style={{ color: 'var(--primary-red)' }}>
                        {val.icon}
                      </div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", margin: 0, color: "var(--text-dark)", fontWeight: 800 }}>
                        {val.title}
                      </h3>
                    </div>
                    <h4 style={{ fontSize: "1.1rem", color: "var(--primary-red)", fontWeight: 700, margin: "0 0 15px" }}>
                      {val.subtitle}
                    </h4>
                    <p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: 0 }}>
                      {val.desc}
                    </p>
                  </div>
                </Reveal>
              ))`;

const pattern = /\]\.map\(\(val, idx\) => \([\s\S]*?<\/Reveal>\s*\)\)/s;
content = content.replace(pattern, replacement);

fs.writeFileSync(file, content, 'utf8');
