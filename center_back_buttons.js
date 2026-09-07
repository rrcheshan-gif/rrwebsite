const fs = require('fs');
const pages = [
  'src/app/services/road-construction/page.tsx',
  'src/app/services/bridge-construction/page.tsx',
  'src/app/services/dredging-reclamation/page.tsx',
  'src/app/services/maritime-construction/page.tsx',
  'src/app/services/water-infrastructure/page.tsx',
  'src/app/services/landslide-mitigation/page.tsx'
];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace('textAlign: "left", marginBottom: "20px"', 'textAlign: "center", marginBottom: "30px"');
    
    // Also let's change the color or style slightly to make it look like a button so it's obvious
    const oldLink = `style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}`;
    const newLink = `style={{ color: "#fff", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", padding: "8px 16px", borderRadius: "30px", textDecoration: "none", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block", backdropFilter: "blur(5px)" }}`;
    
    content = content.replace(oldLink, newLink);
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Centered the back buttons and styled them as pill buttons.');
