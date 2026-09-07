const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Darken the overlay slightly in the middle so text pops more without making the whole image dull
const oldGradient = "linear-gradient(180deg, rgba(5, 10, 25, 0.55) 0%, rgba(0, 0, 0, 0.3) 45%, rgba(5, 10, 25, 0.7) 100%)";
const newGradient = "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.8) 100%)";
content = content.replace(oldGradient, newGradient);

// Add a radial overlay to specifically highlight text
const oldOverlayDiv = "<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.8) 100%)', zIndex: 2 }}></div>";
const newOverlayDiv = "<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.5) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.7) 100%)', zIndex: 2 }}></div>";

content = content.replace(oldOverlayDiv, newOverlayDiv);

// Also boost text shadow of paragraph and h2
content = content.replace(/textShadow: "2px 2px 0px rgba\(0,0,0,1\), 0 8px 30px rgba\(0, 0, 0, 1\), 0 4px 15px rgba\(0, 0, 0, 0\.9\)"/g, 'textShadow: "2px 2px 0px rgba(0,0,0,1), 0 10px 40px rgba(0,0,0,1), 0 5px 20px rgba(0,0,0,0.9)"');
content = content.replace(/textShadow: "1px 1px 3px rgba\(0,0,0,1\), 0 4px 20px rgba\(0,0,0,0\.95\)"/g, 'textShadow: "2px 2px 4px rgba(0,0,0,1), 0 8px 30px rgba(0,0,0,1)"');

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed overlay and shadows');
