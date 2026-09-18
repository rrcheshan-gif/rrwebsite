const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove the text-stroke (black lines) and revert to clean, deep drop-shadows for the heading
content = content.replace(/WebkitTextStroke: '1\.5px rgba\(0,0,0,0\.6\)', textShadow: '3px 3px 0px rgba\(0,0,0,0\.8\), 0 10px 30px rgba\(0,0,0,0\.9\)'/g, "textShadow: '0 4px 25px rgba(0,0,0,0.9), 0 10px 45px rgba(0,0,0,0.7)'");

// 2. Revert description shadow to a cleaner glow
content = content.replace(/textShadow: '1px 1px 2px rgba\(0,0,0,1\), 0 4px 15px rgba\(0,0,0,0\.9\)'/g, "textShadow: '0 2px 15px rgba(0,0,0,0.9), 0 4px 25px rgba(0,0,0,0.7)'");

// 3. Option 2: Make the background gradient behind the text significantly darker to highlight the text
content = content.replace(/background: 'radial-gradient\(550px 280px at center, rgba\(0,0,0,0\.65\) 0%, rgba\(0,0,0,0\.3\) 50%, transparent 100%\)'/g, "background: 'radial-gradient(550px 320px at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 55%, transparent 100%)'");

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully removed text strokes and darkened the center background tint');
