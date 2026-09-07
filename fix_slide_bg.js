const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add background color to the slide container so while video loads there's no flash
const old = "position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', \n                transition: 'opacity 1s ease-in-out', \n                opacity: index === currentSlide ? 1 : 0,\n                zIndex: 1";
                
const newStyle = "position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', \n                transition: 'opacity 1s ease-in-out', \n                opacity: index === currentSlide ? 1 : 0,\n                background: '#0f172a',\n                zIndex: 1";

c = c.replace(old, newStyle);
fs.writeFileSync('src/app/page.tsx', c, 'utf8');
console.log(c.includes('#0f172a') ? "Added dark background to slide container" : "FAILED - pattern not found");
