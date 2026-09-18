const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // specific phrases
    content = content.replace(/road and highway construction/gi, "highway and expressway construction");
    content = content.replace(/road, highway/gi, "highway, expressway");
    content = content.replace(/roads and highways/gi, "highways and expressways");
    content = content.replace(/road construction, highways/gi, "highway and expressway construction");
    content = content.replace(/road construction/gi, "highway and expressway construction");
    content = content.replace(/road paving/gi, "highway and expressway paving");
    content = content.replace(/road surface/gi, "highway and expressway surface");
    content = content.replace(/road contractors/gi, "highway and expressway contractors");
    content = content.replace(/provincial road/gi, "provincial highway and expressway");
    content = content.replace(/rural road/gi, "rural highway and expressway");
    content = content.replace(/rural connectivity roads/gi, "rural connectivity highways and expressways");
    content = content.replace(/road-building/gi, "highway and expressway-building");
    content = content.replace(/road rehabilitation/gi, "highway and expressway rehabilitation");
    content = content.replace(/national roads/gi, "national highways and expressways");
    content = content.replace(/Road Disaster/g, "Highway and Expressway Disaster");

    // Don't replace 'Road Development Authority'

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated terms in ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.json')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir('src/app');
walkDir('src/data');
