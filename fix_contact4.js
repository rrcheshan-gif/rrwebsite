const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'app', 'contact', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// We want to remove the iframes completely, and insert a button under the text.
// Currently the structure is:
// <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
//    ... text ...
// </div>
// <div className="contact-map-wrapper" ...> <iframe...></iframe> </div>

const mapWrapperRegex = /<div className="contact-map-wrapper"[\s\S]*?<\/div>/g;
content = content.replace(mapWrapperRegex, '');

// Now we insert the buttons into the text divs.
// Main Office
content = content.replace(
  /<h3 style={{ fontFamily: "var\(--font-heading\)", fontSize: "1\.5rem", color: "var\(--text-dark\)", marginBottom: "10px" }}>Main Office<\/h3>\s*<p style={{ color: "var\(--text-light\)", fontSize: "1\.1rem", lineHeight: 1\.7 }}>No\. 865, Dr\. Danister de Silva MW,<br\/>Baseline Road, Colombo 09,<br\/>Orugodawatta\.<\/p>\s*<p style={{ color: "var\(--text-dark\)", fontSize: "1\.1rem", marginTop: "10px", fontWeight: 600 }}>Tel: \+94 11-2433427<\/p>/,
  `<h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "10px" }}>Main Office</h3>
                    <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>No. 865, Dr. Danister de Silva MW,<br/>Baseline Road, Colombo 09,<br/>Orugodawatta.</p>
                    <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", marginTop: "10px", fontWeight: 600 }}>Tel: +94 11-2433427</p>
                    <a href="https://maps.app.goo.gl/9m2F9qH3JvYv9Qp68" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-light)", color: "var(--primary-red)", padding: "10px 16px", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid var(--border-soft)", transition: "all 0.3s ease", marginTop: "10px" }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary-red)'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = 'var(--primary-red)'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      View on Map
                    </a>`
);

// Workshop
content = content.replace(
  /<h3 style={{ fontFamily: "var\(--font-heading\)", fontSize: "1\.5rem", color: "var\(--text-dark\)", marginBottom: "10px" }}>Workshop<\/h3>\s*<p style={{ color: "var\(--text-light\)", fontSize: "1\.1rem", lineHeight: 1\.7 }}>No\. 626C, Samurdhi Mw,<br\/>Cheenagahawela, Heiyanthuduwa,<br\/>Sapugaskanda\.<\/p>\s*<p style={{ color: "var\(--text-dark\)", fontSize: "1\.1rem", marginTop: "10px", fontWeight: 600 }}>Tel: \+94 112401201<\/p>/,
  `<h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "10px" }}>Workshop</h3>
                    <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>No. 626C, Samurdhi Mw,<br/>Cheenagahawela, Heiyanthuduwa,<br/>Sapugaskanda.</p>
                    <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", marginTop: "10px", fontWeight: 600 }}>Tel: +94 11 2401201</p>
                    <a href="https://maps.app.goo.gl/hG5u9R9e3yq8v8C58" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-light)", color: "#64748b", padding: "10px 16px", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid var(--border-soft)", transition: "all 0.3s ease", marginTop: "10px" }} onMouseOver={(e) => { e.currentTarget.style.background = '#64748b'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = '#64748b'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      View on Map
                    </a>`
);

// Main Warehouse
content = content.replace(
  /<h3 style={{ fontFamily: "var\(--font-heading\)", fontSize: "1\.5rem", color: "var\(--text-dark\)", marginBottom: "10px" }}>Main Warehouse<\/h3>\s*<p style={{ color: "var\(--text-light\)", fontSize: "1\.1rem", lineHeight: 1\.7 }}>NO 150,<br\/>Keragala Estate,<br\/>Keragala, Henegama\.<\/p>/,
  `<h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "10px" }}>Main Warehouse</h3>
                    <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>NO 150,<br/>Keragala Estate,<br/>Keragala, Henegama.</p>
                    <a href="https://maps.app.goo.gl/3Q8Y9QZ2QW4v7y9C9" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--bg-light)", color: "#64748b", padding: "10px 16px", borderRadius: "10px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid var(--border-soft)", transition: "all 0.3s ease", marginTop: "15px" }} onMouseOver={(e) => { e.currentTarget.style.background = '#64748b'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = '#64748b'; }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      View on Map
                    </a>`
);

// Remove the `display: "flex", flexWrap: "wrap"` alignment which was designed for the map being on the right side.
// We can just simplify the wrapper's flex alignment so it stays neat.
// The wrapper is: <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "25px", display: "flex", gap: "25px", alignItems: "center", flexWrap: "wrap", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} ...>

// We can just keep it as it is, because removing the map will just make the flex items (icon and text) sit together nicely without wrapping early.

fs.writeFileSync(filePath, content);
console.log('Final update complete');
