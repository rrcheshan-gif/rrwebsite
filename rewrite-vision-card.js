const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<Reveal key=\{idx\} delay=\{idx \* 150\} direction="up">[\s\S]*?<\/Reveal>/g;
const newCard = `<Reveal key={idx} delay={idx * 150} direction="up">
                  <div style={{ 
                    background: "var(--white)", 
                    padding: isMobile ? "30px 25px" : "40px 35px", 
                    borderRadius: "16px", 
                    borderTop: "5px solid var(--primary-red)", 
                    borderBottom: "1px solid var(--border-soft)",
                    borderLeft: "1px solid var(--border-soft)",
                    borderRight: "1px solid var(--border-soft)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
                    height: "100%",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    display: "flex",
                    flexDirection: "column"
                  }}
                  className="hover-lift"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                      <div style={{ background: 'rgba(229,57,53,0.1)', color: 'var(--primary-red)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {val.icon}
                      </div>
                      <h3 style={{ color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, fontSize: '1.2rem' }}>
                        {val.title}
                      </h3>
                    </div>
                    <h4 style={{ color: 'var(--primary-red)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '15px' }}>
                      {val.subtitle}
                    </h4>
                    <p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: 0, fontSize: "1.05rem" }}>
                      {val.desc}
                    </p>
                  </div>
                </Reveal>`;

content = content.replace(regex, newCard);
fs.writeFileSync(file, content, 'utf8');
console.log('Replaced card design');
