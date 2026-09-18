const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div className="collage-grid"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<!-- Perfectly Aligned Red/i;
// wait, the outer is `<div className="collage-grid"...> ... </div>` and then `</div>` closes the padding wrapper.
// Let's use a simpler replacement.

const oldCollage = `<div className="collage-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, clamp(140px, 20vw, 220px))", flex: 1, gap: "15px", position: "relative", zIndex: 1 }}>
                      
                      {/* Top Left */}
                      <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                        <img src="/images/home/IMG_3025.jpg" alt="Major Highway and Highway and Expressway Construction by RR Construction Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      
                      {/* Top Right */}
                      <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                        <img src="/images/home/WhatsApp Image 2026-07-18 at 10.24.03.jpeg" alt="Heavy Construction Machinery Fleet in Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
    
                      {/* Bottom Left */}
                      <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                        <img src="/images/home/WhatsApp Image 2026-07-24 at 23.23.33.jpeg" alt="Heavy Civil Engineering and Earthworks Equipment Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
    
                      {/* Bottom Right */}
                      <div style={{ borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                        <img src="/images/kandy-landslide/kandy-5.jpg" alt="Landslide Mitigation and Geotechnical Engineering in Sri Lanka" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      
                    </div>`;

const newSingleImage = `{/* Temporary Single Image Replacing Collage */}
                  <div style={{ flex: 1, borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", display: "flex", minHeight: "clamp(280px, 40vw, 440px)" }}>
                    <img src="/images/home/hero-single.jpg" alt="RR Construction Project" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>`;

if (content.includes('className="collage-grid"')) {
    // using regex because spacing might differ slightly
    const replaced = content.replace(/<div className="collage-grid"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, newSingleImage + '\n                </div>\n              </div>');
    fs.writeFileSync('src/app/page.tsx', replaced, 'utf8');
    console.log('Replaced collage with single image');
} else {
    console.log('Collage grid not found');
}
