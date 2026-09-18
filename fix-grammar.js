const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/highway and highway and expressway/gi, 'highway and expressway');
    content = content.replace(/rural highway and expressways/gi, 'rural highways and expressways');
    content = content.replace(/highway and expressway-building/gi, 'highway and expressway-building');
    content = content.replace(/national highways to rural highways and expressways/gi, 'national highways to rural highways and expressways');
    content = content.replace(/highway and expressway and bridge/gi, 'highway, expressway, and bridge');
    content = content.replace(/highway and expressways/gi, 'highways and expressways');
    content = content.replace(/rural highways and expresswayss/gi, 'rural highways and expressways'); // fix double s
    content = content.replace(/highways and expresswayss/gi, 'highways and expressways'); // fix double s

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed grammar in: ' + filePath);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir('src/app');
walkDir('src/data');
