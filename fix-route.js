const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/\/services\/road-construction/g, "/services/highway-and-expressway-construction");

    // Also replace standalone "roads" texts where it relates to the title, but safely
    // Not doing aggressive text replacement here, just the route URL.
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated URL in ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir('src/app');
replaceInFile('next.config.ts');
