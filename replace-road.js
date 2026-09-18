const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    let original = content;

    // Home page tag exact match
    content = content.replace(/01 \/ ROAD CONSTRUCTION & REHABILITATION/g, "01 / HIGHWAY & EXPRESSWAY CONSTRUCTION & REHABILITATION");

    // General Title case replacements
    content = content.replace(/Road Construction/g, "Highway and Expressway Construction");
    content = content.replace(/Road construction/g, "Highway and expressway construction");
    content = content.replace(/road construction/gi, "highway and expressway construction");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
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
