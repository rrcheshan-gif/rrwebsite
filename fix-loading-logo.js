const fs = require('fs');
let content = fs.readFileSync('src/app/components/PageTransition.tsx', 'utf8');

const imgRegex = /<img\s+src="\/images\/rr-logo\.png"\s+alt="RR Construction"\s+style=\{\{\s*width:[^}]+\}\}\s*\/>/;
const newLogo = `<div style={{ 
          width: "clamp(120px, 40vw, 200px)", 
          height: "clamp(70px, 20vw, 120px)",
          backgroundColor: "var(--primary-red)",
          WebkitMask: "url(/images/rr-logo.png) center/contain no-repeat",
          mask: "url(/images/rr-logo.png) center/contain no-repeat",
          margin: "0 auto"
        }} />`;

content = content.replace(imgRegex, newLogo);
fs.writeFileSync('src/app/components/PageTransition.tsx', content, 'utf8');
console.log('Replaced img with pure red mask div');
