const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add WebkitTextStroke and harder shadows to the heading
content = content.replace(/textShadow: '0 4px 20px rgba\(0,0,0,0\.6\), 0 10px 40px rgba\(0,0,0,0\.5\)'/g, "WebkitTextStroke: '1.5px rgba(0,0,0,0.6)', textShadow: '3px 3px 0px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.9)'");

// Add text outline and harder shadows to description
content = content.replace(/textShadow: '0 2px 10px rgba\(0,0,0,0\.6\), 0 4px 20px rgba\(0,0,0,0\.5\)'/g, "textShadow: '1px 1px 2px rgba(0,0,0,1), 0 4px 15px rgba(0,0,0,0.9)'");

// Darken the blur background tint slightly from 0.45 to 0.6 to give more contrast without widening it
content = content.replace(/background: 'radial-gradient\(550px 280px at center, rgba\(0,0,0,0\.45\) 0%, rgba\(0,0,0,0\.2\) 50%, transparent 100%\)'/g, "background: 'radial-gradient(550px 280px at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'");

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully enhanced text readability with outlines and deep shadows');
