const fs = require('fs');
const file = 'src/app/training/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove the previously added card from the grid
const badCardStart = '          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>\n            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>\n              AI & Future Tech Integration';

// The card ends right before `        </div>\n      </section>`
// Let's use regex to safely remove it
content = content.replace(/\s*<div style={{ background: "var\(--white\)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var\(--primary-red\)", boxShadow: "0 10px 30px rgba\(0,0,0,0\.05\)" }}>\s*<h3 style={{ fontFamily: "var\(--font-heading\)", fontSize: "1\.5rem", marginBottom: "15px", color: "var\(--text-dark\)" }}>\s*AI & Future Tech Integration[\s\S]*?<\/div>/, '');

// 2. Add the new Special Initiatives section right after the grid section
const newSection = `
      {/* Special Initiatives Section */}
      <section style={{ padding: "0 20px 80px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--text-dark)", margin: "0 0 15px 0" }}>Special <span style={{ color: "var(--primary-red)" }}>Initiatives</span></h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", margin: 0 }}>Discover the extra steps we take to empower our team and stay ahead of industry curves.</p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            
            {/* Initiative Item 1 */}
            <div className="hover-lift" style={{ background: "var(--white)", padding: "35px", borderRadius: "20px", borderLeft: "6px solid var(--primary-red)", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", display: "flex", gap: "25px", alignItems: "flex-start", transition: "transform 0.3s ease" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "rgba(229,57,53,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--primary-red)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", margin: 0 }}>Coursera AI Certification for Staff</h3>
                  <span style={{ fontSize: "0.75rem", background: "var(--primary-red)", color: "white", padding: "4px 10px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold" }}>Upcoming Program</span>
                </div>
                <p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: 0, fontSize: "1.05rem" }}>
                  As part of our commitment to continuous development, we are launching a special initiative to provide our staff with a comprehensive AI certification program through <strong>Coursera</strong>. This proactive step ensures our team is equipped with the latest knowledge in Artificial Intelligence, preparing them to integrate advanced technologies and automated workflows into our future engineering projects.
                </p>
              </div>
            </div>

            {/* Space for future items */}

          </div>
        </div>
      </section>
`;

content = content.replace('      </section>\n    </div>', '      </section>\n' + newSection + '    </div>');
content = content.replace('      </section>\r\n    </div>', '      </section>\r\n' + newSection + '    </div>');

fs.writeFileSync(file, content, 'utf8');
console.log('Moved AI course to a separate Special Initiatives section');
