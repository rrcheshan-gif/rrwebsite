const fs = require('fs');

const pages = [
  'src/app/services/road-construction/page.tsx',
  'src/app/services/bridge-construction/page.tsx',
  'src/app/services/dredging-reclamation/page.tsx',
  'src/app/services/maritime-construction/page.tsx',
  'src/app/services/water-infrastructure/page.tsx',
  'src/app/services/landslide-mitigation/page.tsx'
];

const backLinkNode = `
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Services
            </Link>
          </div>
`;

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Attempt to inject right before the H1 in the hero section
    const h1Regex = /(<h1[^>]*>)/;
    
    // First, remove any existing Back to Services links in the hero to avoid duplicates
    // This is tricky with regex, so we'll just check if one exists near the top and remove it.
    // Actually, it's safer to just let the human do it or do a manual replace.
    // Let's just find `<Link href="/services"` before the H1 and replace that whole block if it exists.
    
    const heroLinkRegex = /<Link\s*href="\/services"[\s\S]*?<\/Link>/;
    
    // We only want to replace the first occurrence (which is usually in the hero)
    if (heroLinkRegex.test(content) && content.indexOf('Back to Services') < content.indexOf('<h1')) {
        content = content.replace(heroLinkRegex, backLinkNode);
    } else {
        // If there's no link before H1, insert it before H1
        content = content.replace(h1Regex, backLinkNode + '$1');
    }
    
    fs.writeFileSync(file, content, 'utf8');
    console.log('Processed', file);
});

// Specifically for bridge-construction, update the background image
let bridgeContent = fs.readFileSync('src/app/services/bridge-construction/page.tsx', 'utf8');
bridgeContent = bridgeContent.replace("backgroundImage: \"url('/images/service-bridge-hero.jpeg')\"", "backgroundImage: \"url('/images/home/bridge_mahanama-enhanced.jpeg')\"");
fs.writeFileSync('src/app/services/bridge-construction/page.tsx', bridgeContent, 'utf8');
console.log('Updated bridge hero background.');

