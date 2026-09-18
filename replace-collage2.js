const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div className="collage-grid"[\s\S]*?<\!-- Bottom Right -->[\s\S]*?<\/div>\s*<\/div>/;

const newSingleImage = `{/* Temporary Single Image Replacing Collage */}
                  <div style={{ flex: 1, borderRadius: "24px", overflow: "hidden", background: "var(--bg-base)", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", display: "flex", minHeight: "clamp(280px, 40vw, 440px)" }}>
                    <img src="/images/home/hero-single.jpg" alt="RR Construction Project" className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>`;

if (content.match(regex)) {
    content = content.replace(regex, newSingleImage);
    fs.writeFileSync('src/app/page.tsx', content, 'utf8');
    console.log('Replaced collage cleanly');
} else {
    console.log('Regex did not match');
}
