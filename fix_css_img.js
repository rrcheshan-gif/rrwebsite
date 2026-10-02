const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Replace the bad rule
css = css.replace(/img\[style\*="height"\]\s*\{[\s\S]*?\}/, '');

fs.writeFileSync('src/app/globals.css', css, 'utf8');
console.log("Removed the aggressive image height override.");
