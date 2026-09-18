const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

function getSubtitle(filePath) {
    if (filePath.includes('services')) return 'OUR SERVICES';
    if (filePath.includes('about')) return 'OUR COMPANY';
    if (filePath.includes('projects')) return 'OUR PROJECTS';
    if (filePath.includes('news')) return 'LATEST NEWS';
    if (filePath.includes('materials')) return 'MATERIALS';
    if (filePath.includes('resources')) return 'RESOURCES';
    if (filePath.includes('sustainability')) return 'SUSTAINABILITY';
    if (filePath.includes('career')) return 'CAREERS';
    if (filePath.includes('contact')) return 'GET IN TOUCH';
    return 'OVERVIEW';
}

let modifiedCount = 0;

walkDir('src/app', function(filePath) {
    if (!filePath.endsWith('page.tsx')) return;
    if (filePath.includes('components')) return;
    if (filePath.endsWith('src\\app\\page.tsx') || filePath.endsWith('src/app/page.tsx')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // We only want to modify the hero section. Let's find the first <h1
    const h1Index = content.indexOf('<h1');
    if (h1Index !== -1) {
        // Find the section or div wrapping the h1.
        // It's too complex to parse perfectly, but we can replace centering styles in the top chunk of the file (e.g. first 2500 chars)
        let topChunk = content.substring(0, h1Index + 1000);
        let bottomChunk = content.substring(h1Index + 1000);

        // Replace alignments in top chunk
        topChunk = topChunk.replace(/textAlign:\s*['"]center['"]/g, 'textAlign: "left"');
        topChunk = topChunk.replace(/alignItems:\s*['"]center['"]/g, 'alignItems: "flex-start"');

        // Check if the h1 already has our red line injected. If so, skip injecting to avoid duplicates.
        if (!topChunk.includes('gap: "15px", marginBottom: "15px"')) {
            // Remove existing subtitle spans that are centered before h1 (like in services/page.tsx)
            topChunk = topChunk.replace(/<div style=\{\{\s*display:\s*['"]flex['"],\s*alignItems:\s*['"]flex-start['"],\s*gap:\s*['"]12px['"],\s*marginBottom:\s*['"]18px['"]\s*\}\}>[\s\S]*?<\/div>/g, '');
            
            // Inject the new subtitle block right before <h1
            const subtitle = getSubtitle(filePath);
            const injection = `<div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>\n              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>\n              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>${subtitle}</h4>\n            </div>\n            `;
            
            topChunk = topChunk.replace(/(<h1[^>]*>)/, injection + '$1');
        }

        // Change the red span to text-gradient
        // <span style={{ color: 'var(--primary-red)' }}> or <span style={{ color: "var(--primary-red)" }}>
        topChunk = topChunk.replace(/<span[^>]*color:\s*['"]var\(--primary-red\)['"][^>]*>/g, '<span className="text-gradient" style={{ fontWeight: 600 }}>');

        content = topChunk + bottomChunk;
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            modifiedCount++;
        }
    }
});

console.log('Modified ' + modifiedCount + ' inner pages');
