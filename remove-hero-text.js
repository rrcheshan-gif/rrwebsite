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

const files = walk('src/app').filter(f => f !== 'src\\app\\page.tsx' && !f.includes('\\[') && !f.includes('/['));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the first </h1>
    const h1End = content.indexOf('</h1>');
    if (h1End !== -1) {
        // Find the first <p immediately following the </h1> (within next 500 chars to be safe)
        const nextContent = content.substring(h1End);
        const pStart = nextContent.indexOf('<p');
        
        if (pStart !== -1 && pStart < 500) {
            // Check if it's likely a hero subtitle
            const fullPStart = h1End + pStart;
            const pEnd = content.indexOf('</p>', fullPStart);
            
            if (pEnd !== -1) {
                const fullPEnd = pEnd + 4;
                const pContent = content.substring(fullPStart, fullPEnd);
                
                // If it's a very long P tag or contains a lot of styling typical of hero subtitles
                if (pContent.includes('style={{') && (pContent.includes('fontSize') || pContent.includes('color:'))) {
                    // Remove it!
                    content = content.substring(0, fullPStart) + content.substring(fullPEnd);
                    fs.writeFileSync(file, content, 'utf8');
                    console.log('Removed from:', file);
                }
            }
        }
    }
});
