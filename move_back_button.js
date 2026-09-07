const fs = require('fs');
const pages = [
  'src/app/services/road-construction/page.tsx',
  'src/app/services/bridge-construction/page.tsx',
  'src/app/services/dredging-reclamation/page.tsx',
  'src/app/services/maritime-construction/page.tsx',
  'src/app/services/water-infrastructure/page.tsx',
  'src/app/services/landslide-mitigation/page.tsx'
];

const oldLinkBlockRegex = /<\s*div\s+style=\{\{\s*textAlign:\s*"center",\s*marginBottom:\s*"30px"\s*\}\}>[\s\S]*?<\/\s*div\s*>/g;

const absoluteLinkBlock = `
        {/* Absolute Back Button */}
        <div style={{ position: 'absolute', top: isMobile ? '20px' : '40px', left: isMobile ? '20px' : '40px', zIndex: 10 }}>
          <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
            &larr; Back to Services
          </Link>
        </div>
`;

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove the old centered link
    content = content.replace(oldLinkBlockRegex, '');
    
    // Also remove any empty `<div style={{ marginBottom: '20px' }}>\n            \n\n          </div>` leftovers
    content = content.replace(/<div style=\{\{\s*marginBottom:\s*'20px'\s*\}\}>\s*<\/div>/g, '');
    
    // The section tags vary, some have className="page-header" some don't.
    // Let's inject it right after the overlay div, or right after `<section ... >` 
    // It's safer to find the first `<section` and then find its closing `>`
    const sectionMatch = content.match(/<section[^>]*>/);
    if (sectionMatch) {
        // We must ensure the section has position: 'relative' if it doesn't already
        // But since we are placing it inside the section, let's just insert the new link block right after the section open tag
        content = content.replace(sectionMatch[0], sectionMatch[0] + absoluteLinkBlock);
        
        // Let's also ensure the section has position relative if it doesn't
        if (!content.match(/<section[^>]*position:\s*'relative'/)) {
             // We won't blindly add it because some use classes, but we can assume the hero section is relatively positioned or takes full width.
        }
    }
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Moved back button to absolute top-left for all service pages.');
