const fs = require('fs');
const path = require('path');

let fixCount = 0;

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Replace `width: "1200px"` (or similar) ensuring it's not `maxWidth` or `max-width`
            // using negative lookbehind for 'max-' and 'max'
            content = content.replace(/(?<!max[A-Z-]*?)width:\s*(['"])(1200px|1000px|800px|1500px)\1/gi, 'width: "100%", maxWidth: "$2"');
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed widths in:', fullPath);
                fixCount++;
            }
        }
    }
}
processDir('src/app');
console.log('Total files fixed:', fixCount);
