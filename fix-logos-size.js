const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// padding: "15px 25px" -> "12px 20px"
content = content.replace(/padding:\s*"15px 25px"/g, 'padding: "12px 20px"');

// gap: "18px" -> "15px"
content = content.replace(/gap:\s*"18px"/g, 'gap: "15px"');

// width: "min(100%, 320px)" -> "min(100%, 290px)"
content = content.replace(/width:\s*"min\(100%,\s*320px\)"/g, 'width: "min(100%, 290px)"');

// width: "75px", height: "75px" -> "60px"
content = content.replace(/width:\s*"75px",\s*height:\s*"75px"/g, 'width: "60px", height: "60px"');

// fontSize: "1rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "0.5px", lineHeight: 1.3
content = content.replace(/fontSize:\s*"1rem",\s*fontWeight:\s*800/g, 'fontSize: "0.92rem", fontWeight: 800');

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Made client logos slightly smaller');
