const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Find the wrapper div with overflow: 'hidden'
content = content.replace(
  "borderRadius: 'clamp(24px, 5vw, 48px)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'",
  "borderRadius: 'clamp(24px, 5vw, 48px)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', transform: 'translateZ(0)', isolation: 'isolate', WebkitMaskImage: '-webkit-radial-gradient(white, black)'"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Added Safari clipping fix');
