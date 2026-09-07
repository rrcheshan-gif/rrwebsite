const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldPattern = /<div className="collage-grid"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*\{\/\* Floating 30\+ Years Box/;

const newGridCode = '<div className="collage-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, 220px)", flex: 1, gap: "15px", position: "relative", zIndex: 1 }}>\n                    \n                    {/* Top Left */}\n                    <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>\n                      <img src="/images/home/IMG_3025.jpg" alt="Major Highway and Road Construction by RR Construction Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />\n                    </div>\n                    \n                    {/* Top Right */}\n                    <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>\n                      <img src="/images/home/WhatsApp Image 2026-07-18 at 10.24.03.jpeg" alt="Heavy Construction Machinery Fleet in Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />\n                    </div>\n  \n                    {/* Bottom Left */}\n                    <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>\n                      <img src="/images/home/WhatsApp Image 2026-07-24 at 23.23.33.jpeg" alt="Heavy Civil Engineering and Earthworks Equipment Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />\n                    </div>\n  \n                    {/* Bottom Right */}\n                    <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>\n                      <img src="/images/kandy-landslide/kandy-5.jpg" alt="Landslide Mitigation and Geotechnical Engineering in Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />\n                    </div>\n                    \n                  </div>\n                </div>\n                \n                {/* Floating 30+ Years Box Attached to Pictures */';

if (content.match(oldPattern)) {
    content = content.replace(oldPattern, newGridCode);
    fs.writeFileSync('src/app/page.tsx', content, 'utf8');
    console.log('Successfully updated the image grid to 2x2.');
} else {
    console.log('Could not find the grid pattern to replace.');
}
