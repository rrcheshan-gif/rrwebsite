const fs = require('fs');
const path = require('path');

let fixCount = 0;

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Look for inline styles like width: "1200px" or width: '1200px'
            // and replace with width: "100%", maxWidth: "1200px"
            content = content.replace(/(?<!max-)\bwidth:\s*(['"])([0-9]{3,4}px)\1/g, 'width: "100%", maxWidth: ""');
            
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
