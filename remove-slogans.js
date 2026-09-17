const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('page.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('src/app');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find <h1
    const h1Index = content.indexOf('<h1');
    if (h1Index !== -1) {
        // Find the last <h4 before <h1
        const precedingText = content.substring(0, h1Index);
        const h4Index = precedingText.lastIndexOf('<h4');
        
        if (h4Index !== -1) {
            // Check if the h4 is close to h1 (e.g. within 200-300 characters, no other tags in between except whitespace/newlines)
            const between = content.substring(h4Index, h1Index);
            
            // It should end with </h4> followed by whitespace
            if (between.includes('</h4>') && between.trim().endsWith('</h4>')) {
                // Determine the end of the h4 tag
                const h4End = content.indexOf('</h4>', h4Index) + 5;
                const h4Content = content.substring(h4Index, h4End);
                
                // Extra safety: make sure it has the typical inline styles for the slogan
                if (h4Content.includes('var(--primary-red)') && (h4Content.includes('textShadow') || h4Content.includes('letterSpacing'))) {
                    console.log('Removing from', file, ':', h4Content);
                    content = content.substring(0, h4Index) + content.substring(h4End);
                    fs.writeFileSync(file, content, 'utf8');
                }
            }
        }
    }
});
