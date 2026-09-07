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
    
    // Revert the button style back to the clean underline, just keeping the textAlign center
    const oldLink = `style={{ color: "#fff", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", padding: "8px 16px", borderRadius: "30px", textDecoration: "none", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block", backdropFilter: "blur(5px)" }}`;
    const newLink = `style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}`;
    
    content = content.replace(oldLink, newLink);
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Reverted to clean underline style to avoid sinibola look.');
