const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldVignette = `{/* Light vignette for the edges to frame the bright image */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.5) 100%)', zIndex: 2 }}></div>`;

const newVignette = ``; // Completely remove the edge darkening

const oldBlurStr = `{/* Smooth Center Blur & Tint behind the text */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', 
            WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)', 
            maskImage: 'radial-gradient(ellipse 75% 85% at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)', 
            background: 'radial-gradient(ellipse 75% 85% at center, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0.15) 60%, transparent 100%)',
            zIndex: 2 
          }}></div>`;

// Use tight pixel-based radii to strictly constrain the blur exactly to the text dimensions (roughly 800px wide, 400px tall oval)
const newBlurStr = `{/* Strict Blur & Tint ONLY behind the text area */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', 
            WebkitMaskImage: 'radial-gradient(550px 280px at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)', 
            maskImage: 'radial-gradient(550px 280px at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)', 
            background: 'radial-gradient(550px 280px at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
            zIndex: 2 
          }}></div>`;

content = content.replace(oldVignette, newVignette);
content = content.replace(oldBlurStr, newBlurStr);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully restricted blur strictly to text area');
