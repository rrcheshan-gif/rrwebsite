const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Brighten the images
content = content.replace(/filter: 'brightness\(0\.72\) contrast\(1\.05\)'/g, "filter: 'brightness(1) contrast(1.05)'");

// 2. Replace the overlay layer
const oldOverlay = `{/* Premium Multi-layer Gradient Overlay - Centered for text readability */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.7) 100%), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)', zIndex: 2 }}></div>`;

const newOverlay = `{/* Light vignette for the edges to frame the bright image */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.5) 100%)', zIndex: 2 }}></div>
          
          {/* Cinematic Center Blur & Tint specifically behind the text */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', 
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0) 55%)', 
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0) 55%)', 
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 25%, transparent 55%)',
            zIndex: 2 
          }}></div>`;

content = content.replace(oldOverlay, newOverlay);

// 3. Make the red text punchier and text shadows stronger
// Change the red text in the main heading
content = content.replace(/<span style={{ color: 'var\(--primary-red\)' }}>\{slide\.heading2\}<\/span>/g, "<span style={{ color: '#ff4444', textShadow: '0 4px 30px rgba(255, 68, 68, 0.4)' }}>{slide.heading2}</span>");

// Change heading text shadow
content = content.replace(/textShadow: '2px 2px 0px rgba\(0,0,0,1\), 0 10px 40px rgba\(0,0,0,1\)'/g, "textShadow: '0 4px 20px rgba(0,0,0,0.6), 0 10px 40px rgba(0,0,0,0.5)'");

// Change description text shadow
content = content.replace(/textShadow: '1px 1px 3px rgba\(0,0,0,1\), 0 4px 20px rgba\(0,0,0,0\.8\)'/g, "textShadow: '0 2px 10px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.5)'");

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully brightened images and added cinematic text blur');
