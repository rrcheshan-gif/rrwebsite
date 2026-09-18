const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Change the home-nav background opacity to be much darker
content = content.replace(
    /background: rgba\(15, 23, 42, 0\.35\);/, 
    'background: rgba(15, 23, 42, 0.85);'
);

// We can also lower the saturation to avoid weird color bleeding
content = content.replace(
    /backdrop-filter: blur\(24px\) saturate\(180\%\);/g, 
    'backdrop-filter: blur(16px) saturate(120%);'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated navbar background darkness');
