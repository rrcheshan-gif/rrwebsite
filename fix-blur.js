const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldBlurStr = `          {/* Cinematic Center Blur & Tint specifically behind the text */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', 
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0) 55%)', 
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0) 55%)', 
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 25%, transparent 55%)',
            zIndex: 2 
          }}></div>`;

const newBlurStr = `          {/* Smooth Center Blur & Tint behind the text */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', 
            WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)', 
            maskImage: 'radial-gradient(ellipse 75% 85% at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)', 
            background: 'radial-gradient(ellipse 75% 85% at center, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0.15) 60%, transparent 100%)',
            zIndex: 2 
          }}></div>`;

content = content.replace(oldBlurStr, newBlurStr);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated the blur mask to be wider and smoother');
