const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'contact', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// The goal is to remove the ugly iframes and replace them with a sleek button that opens the map in a new tab.

const mainOfficeRegex = /<div style={{ background: "var\(--white\)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", marginBottom: "25px", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease", display: "grid", gridTemplateColumns: "repeat\(auto-fit, minmax\(280px, 1fr\)\)", gap: "25px", alignItems: "center" }} onMouseOver=\{\(e\) => e\.currentTarget\.style\.transform = 'translateY\(-5px\)'\} onMouseOut=\{\(e\) => e\.currentTarget\.style\.transform = 'none'\}>\s*<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>\s*<div style={{ background: "rgba\(100,116,139,0\.1\)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>\s*<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"><\/rect><path d="M9 22v-4h6v4"><\/path><path d="M8 6h.01"><\/path><path d="M16 6h.01"><\/path><path d="M12 6h.01"><\/path><path d="M12 10h.01"><\/path><path d="M12 14h.01"><\/path><path d="M16 10h.01"><\/path><path d="M16 14h.01"><\/path><path d="M8 10h.01"><\/path><path d="M8 14h.01"><\/path><\/svg>\s*<\/div>\s*<div>\s*<h3 style={{ fontFamily: "var\(--font-heading\)", fontSize: "1\.5rem", color: "var\(--text-dark\)", marginBottom: "10px" }}>Main Office<\/h3>\s*<p style={{ color: "var\(--text-light\)", fontSize: "1\.1rem", lineHeight: 1\.7 }}>No\. 865, Dr\. Danister de Silva MW,<br\/>Baseline Road, Colombo 09,<br\/>Orugodawatta\.<\/p>\s*<p style={{ color: "var\(--text-dark\)", fontSize: "1\.1rem", marginTop: "10px", fontWeight: 600 }}>Tel: \+94 11-2433427<\/p>\s*<\/div>\s*<\/div>\s*<div className="contact-map-wrapper"[^>]*>\s*<iframe[^>]*><\/iframe>\s*<\/div>\s*<\/div>/g;

const newMainOffice = `<div style={{ background: "var(--white)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "25px", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                      <div style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "10px" }}>Main Office</h3>
                        <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>No. 865, Dr. Danister de Silva MW,<br/>Baseline Road, Colombo 09,<br/>Orugodawatta.</p>
                        <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", marginTop: "10px", fontWeight: 600, marginBottom: 0 }}>Tel: +94 11-2433427</p>
                      </div>
                    </div>
                    <a href="https://maps.app.goo.gl/9m2F9qH3JvYv9Qp68" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-light)", color: "var(--primary-red)", padding: "12px 20px", borderRadius: "12px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid var(--border-soft)", alignSelf: "center", transition: "all 0.3s ease" }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary-red)'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = 'var(--primary-red)'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      View on Map
                    </a>
                  </div>
                </div>`;
                
const workshopRegex = /<div style={{ background: "var\(--white\)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", marginBottom: "25px", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease", display: "grid", gridTemplateColumns: "repeat\(auto-fit, minmax\(280px, 1fr\)\)", gap: "25px", alignItems: "center" }} onMouseOver=\{\(e\) => e\.currentTarget\.style\.transform = 'translateY\(-5px\)'\} onMouseOut=\{\(e\) => e\.currentTarget\.style\.transform = 'none'\}>\s*<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>\s*<div style={{ background: "rgba\(100,116,139,0\.1\)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>\s*<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"><\/path><path d="M17 18h1"><\/path><path d="M12 18h1"><\/path><path d="M7 18h1"><\/path><\/svg>\s*<\/div>\s*<div>\s*<h3 style={{ fontFamily: "var\(--font-heading\)", fontSize: "1\.5rem", color: "var\(--text-dark\)", marginBottom: "10px" }}>Workshop<\/h3>\s*<p style={{ color: "var\(--text-light\)", fontSize: "1\.1rem", lineHeight: 1\.7 }}>No\. 626C, Samurdhi Mw,<br\/>Cheenagahawela, Heiyanthuduwa,<br\/>Sapugaskanda\.<\/p>\s*<p style={{ color: "var\(--text-dark\)", fontSize: "1\.1rem", marginTop: "10px", fontWeight: 600 }}>Tel: \+94 112401201<\/p>\s*<\/div>\s*<\/div>\s*<div className="contact-map-wrapper"[^>]*>\s*<iframe[^>]*><\/iframe>\s*<\/div>\s*<\/div>/g;

const newWorkshop = `<div style={{ background: "var(--white)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "25px", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                      <div style={{ background: "rgba(100,116,139,0.1)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "10px" }}>Workshop</h3>
                        <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>No. 626C, Samurdhi Mw,<br/>Cheenagahawela, Heiyanthuduwa,<br/>Sapugaskanda.</p>
                        <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", marginTop: "10px", fontWeight: 600, marginBottom: 0 }}>Tel: +94 11 2401201</p>
                      </div>
                    </div>
                    <a href="https://maps.app.goo.gl/hG5u9R9e3yq8v8C58" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-light)", color: "#64748b", padding: "12px 20px", borderRadius: "12px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid var(--border-soft)", alignSelf: "center", transition: "all 0.3s ease" }} onMouseOver={(e) => { e.currentTarget.style.background = '#64748b'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = '#64748b'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      View on Map
                    </a>
                  </div>
                </div>`;

const warehouseRegex = /<div style={{ background: "var\(--white\)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", marginBottom: "25px", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease", display: "grid", gridTemplateColumns: "repeat\(auto-fit, minmax\(280px, 1fr\)\)", gap: "25px", alignItems: "center" }} onMouseOver=\{\(e\) => e\.currentTarget\.style\.transform = 'translateY\(-5px\)'\} onMouseOut=\{\(e\) => e\.currentTarget\.style\.transform = 'none'\}>\s*<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>\s*<div style={{ background: "rgba\(100,116,139,0\.1\)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>\s*<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"><\/path><polyline points="3.27 6.96 12 12.01 20.73 6.96"><\/polyline><line x1="12" y1="22.08" x2="12" y2="12"><\/line><\/svg>\s*<\/div>\s*<div>\s*<h3 style={{ fontFamily: "var\(--font-heading\)", fontSize: "1\.5rem", color: "var\(--text-dark\)", marginBottom: "10px" }}>Main Warehouse<\/h3>\s*<p style={{ color: "var\(--text-light\)", fontSize: "1\.1rem", lineHeight: 1\.7 }}>NO 150,<br\/>Keragala Estate,<br\/>Keragala, Henegama\.<\/p>\s*<\/div>\s*<\/div>\s*<div className="contact-map-wrapper"[^>]*>\s*<iframe[^>]*><\/iframe>\s*<\/div>\s*<\/div>/g;

const newWarehouse = `<div style={{ background: "var(--white)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "25px", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                      <div style={{ background: "rgba(100,116,139,0.1)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                      </div>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "10px" }}>Main Warehouse</h3>
                        <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>NO 150,<br/>Keragala Estate,<br/>Keragala, Henegama.</p>
                      </div>
                    </div>
                    <a href="https://maps.app.goo.gl/3Q8Y9QZ2QW4v7y9C9" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-light)", color: "#64748b", padding: "12px 20px", borderRadius: "12px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid var(--border-soft)", alignSelf: "center", transition: "all 0.3s ease" }} onMouseOver={(e) => { e.currentTarget.style.background = '#64748b'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = '#64748b'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      View on Map
                    </a>
                  </div>
                </div>`;

content = content.replace(mainOfficeRegex, newMainOffice);
content = content.replace(workshopRegex, newWorkshop);
content = content.replace(warehouseRegex, newWarehouse);

fs.writeFileSync(filePath, content);
console.log('Update complete');
