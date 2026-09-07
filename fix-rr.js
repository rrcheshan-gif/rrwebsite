const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/Rr Construction/g, "RR Construction");
    content = content.replace(/\(pvt\)/g, "(Pvt)");
    content = content.replace(/\(Pvt\) ltd/gi, "(Pvt) Ltd");
    
    // Also check for any other weird capitalizations
    content = content.replace(/Rr/g, "RR");
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed RR in:', filePath);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            processFile(fullPath);
        }
    }
}

walkDir('src/app');
