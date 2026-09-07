const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk('src/app');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Remove ugly text justification
    content = content.replace(/textAlign:\s*["']justify["'],?/g, "");
    content = content.replace(/,\s*textAlign:\s*["']justify["']/g, "");
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed text justification in ${file}`);
    }
});
