const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'app', 'contact', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace contact-map-wrapper div entirely with a neat anchor tag button.

const mainOfficeTarget = /<div className="contact-map-wrapper"[\s\S]*?<iframe src="https:\/\/maps\.google\.com\/maps\?q=RR%20Construction,%20No\.%20865,%20Dr\.%20Danister%20de%20Silva%20Mawatha,%20Colombo&t=&z=17&ie=UTF8&iwloc=&output=embed"[\s\S]*?<\/iframe>\s*<\/div>/;
const mainOfficeButton = `<a href="https://maps.app.goo.gl/9m2F9qH3JvYv9Qp68" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-light)", color: "var(--primary-red)", padding: "12px 20px", borderRadius: "12px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid var(--border-soft)", alignSelf: "center", transition: "all 0.3s ease", marginTop: "15px" }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary-red)'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = 'var(--primary-red)'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      View on Map
                    </a>`;
content = content.replace(mainOfficeTarget, mainOfficeButton);

const workshopTarget = /<div className="contact-map-wrapper"[\s\S]*?<iframe src="https:\/\/maps\.google\.com\/maps\?q=RR%20Constructions%20%7C%20Work%20Shop%2C%20Heiyanthuduwa&t=&z=16&ie=UTF8&iwloc=&output=embed"[\s\S]*?<\/iframe>\s*<\/div>/;
const workshopButton = `<a href="https://maps.app.goo.gl/hG5u9R9e3yq8v8C58" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-light)", color: "#64748b", padding: "12px 20px", borderRadius: "12px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid var(--border-soft)", alignSelf: "center", transition: "all 0.3s ease", marginTop: "15px" }} onMouseOver={(e) => { e.currentTarget.style.background = '#64748b'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = '#64748b'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      View on Map
                    </a>`;
content = content.replace(workshopTarget, workshopButton);

const warehouseTarget = /<div className="contact-map-wrapper"[\s\S]*?<iframe src="https:\/\/maps\.google\.com\/maps\?q=RRC%20Main%20Warehouse%2C%20Henegama&t=&z=16&ie=UTF8&iwloc=&output=embed"[\s\S]*?<\/iframe>\s*<\/div>/;
const warehouseButton = `<a href="https://maps.app.goo.gl/3Q8Y9QZ2QW4v7y9C9" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-light)", color: "#64748b", padding: "12px 20px", borderRadius: "12px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid var(--border-soft)", alignSelf: "center", transition: "all 0.3s ease", marginTop: "15px" }} onMouseOver={(e) => { e.currentTarget.style.background = '#64748b'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = '#64748b'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      View on Map
                    </a>`;
content = content.replace(warehouseTarget, warehouseButton);

// Revert grid layout to flex layout
content = content.replace(/display: "grid", gridTemplateColumns: "repeat\(auto-fit, minmax\(280px, 1fr\)\)"/g, 'display: "flex", flexWrap: "wrap", justifyContent: "space-between"');

fs.writeFileSync(filePath, content);
console.log('Final update complete');
