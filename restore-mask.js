const fs = require('fs');
let content = fs.readFileSync('src/app/components/PageTransition.tsx', 'utf8');

// Change back to logo.png and adjust size a bit for the mask
content = content.replace(/url\(\/images\/rr-logo\.png\)/g, 'url(/images/logo.png)');
// Revert width to the original clamp(160px, 45vw, 240px)
content = content.replace(/width: "clamp\(120px, 40vw, 200px\)"/, 'width: "clamp(160px, 45vw, 240px)"');
content = content.replace(/height: "clamp\(70px, 20vw, 120px\)"/, 'height: "clamp(80px, 22vw, 110px)"'); // roughly matches 555x255

fs.writeFileSync('src/app/components/PageTransition.tsx', content, 'utf8');
console.log('Restored logo.png mask');
