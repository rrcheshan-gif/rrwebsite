const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'app', 'contact', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Main Office card
const mainOfficeRegex = /<div style={{ background: "var\(--white\)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", marginBottom: "25px", display: "flex", gap: "25px", alignItems: "center", flexWrap: "wrap", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease" }} onMouseOver=\{\(e\) => e\.currentTarget\.style\.transform = 'translateY\(-5px\)'\} onMouseOut=\{\(e\) => e\.currentTarget\.style\.transform = 'none'\}>\s*<div style={{ background: "rgba\(100,116,139,0\.1\)", color: "#64748b", padding: "20px", borderRadius: "20px" }}>([\s\S]*?)<\/div>\s*<div style={{ flex: "1 1 200px", minWidth: "200px" }}>([\s\S]*?)<\/div>\s*<div className="contact-map-wrapper"[^>]*>\s*<iframe src="(.*?)"[^>]*><\/iframe>\s*<\/div>\s*<\/div>/;

content = content.replace(mainOfficeRegex, (match, icon, text, iframeSrc) => {
  return `<div style={{ background: "var(--white)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "30px", display: "flex", flexDirection: "column", gap: "20px", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div style={{ background: "rgba(100,116,139,0.1)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>
                      ${icon}
                    </div>
                    <div>
                      ${text}
                    </div>
                  </div>
                  <div className="contact-map-wrapper" style={{ width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-soft)", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                    <iframe src="${iframeSrc}" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>`;
});

// Replace Main Warehouse card
const warehouseRegex = /<div style={{ background: "var\(--white\)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", marginBottom: "25px", display: "flex", gap: "25px", alignItems: "center", flexWrap: "wrap", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease" }} onMouseOver=\{\(e\) => e\.currentTarget\.style\.transform = 'translateY\(-5px\)'\} onMouseOut=\{\(e\) => e\.currentTarget\.style\.transform = 'none'\}>\s*<div style={{ background: "rgba\(100,116,139,0\.1\)", color: "#64748b", padding: "20px", borderRadius: "20px" }}>([\s\S]*?)<\/div>\s*<div style={{ flex: "1 1 200px", minWidth: "200px" }}>([\s\S]*?)<\/div>\s*<div className="contact-map-wrapper"[^>]*>\s*<iframe src="(.*?)"[^>]*><\/iframe>\s*<\/div>\s*<\/div>/;

content = content.replace(warehouseRegex, (match, icon, text, iframeSrc) => {
  return `<div style={{ background: "var(--white)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "30px", display: "flex", flexDirection: "column", gap: "20px", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div style={{ background: "rgba(100,116,139,0.1)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>
                      ${icon}
                    </div>
                    <div>
                      ${text}
                    </div>
                  </div>
                  <div className="contact-map-wrapper" style={{ width: "100%", height: "250px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-soft)", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                    <iframe src="${iframeSrc}" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>`;
});

// Replace Workshop card
const workshopRegex = /<div style={{ background: "var\(--white\)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba\(0,0,0,0\.04\)", marginBottom: "25px", display: "flex", gap: "25px", alignItems: "center", flexWrap: "wrap", border: "1px solid var\(--border-soft\)", transition: "transform 0\.4s ease" }} onMouseOver=\{\(e\) => e\.currentTarget\.style\.transform = 'translateY\(-5px\)'\} onMouseOut=\{\(e\) => e\.currentTarget\.style\.transform = 'none'\}>\s*<div style={{ background: "rgba\(100,116,139,0\.1\)", color: "#64748b", padding: "20px", borderRadius: "20px" }}>([\s\S]*?)<\/div>\s*<div style={{ flex: "1 1 200px", minWidth: "200px" }}>([\s\S]*?)<\/div>\s*<div className="contact-map-wrapper"[^>]*>\s*<iframe src="(.*?)"[^>]*><\/iframe>\s*<\/div>\s*<\/div>/;

content = content.replace(workshopRegex, (match, icon, text, iframeSrc) => {
  return `<div style={{ background: "var(--white)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "30px", display: "flex", flexDirection: "column", gap: "20px", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <div style={{ background: "rgba(100,116,139,0.1)", color: "#64748b", padding: "16px", borderRadius: "16px", flexShrink: 0 }}>
                      ${icon}
                    </div>
                    <div>
                      ${text}
                    </div>
                  </div>
                  <div className="contact-map-wrapper" style={{ width: "100%", height: "250px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-soft)", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                    <iframe src="${iframeSrc}" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>`;
});


fs.writeFileSync(filePath, content);
console.log('Restoration and redesign complete');
