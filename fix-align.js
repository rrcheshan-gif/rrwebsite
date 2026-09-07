const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

// Change alignItems to flex-start
content = content.replace(
    'alignItems: "center" }}>\n              \n              <div style={{ flex: "1.2"',
    'alignItems: "flex-start" }}>\n              \n              <div style={{ flex: "1.2"'
);

// Optional: increase image height slightly to 650px to match longer text
content = content.replace(
    'height: isMobile ? "450px" : "600px"',
    'height: isMobile ? "450px" : "650px"'
);

fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
console.log('Fixed alignment');
