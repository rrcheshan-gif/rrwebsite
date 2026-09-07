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

const files = walk('src/app').concat(walk('src/data'));
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace mangled UTF-8 characters
    content = content.replace(/—/g, " - ");
    content = content.replace(/–/g, " - ");
    content = content.replace(/’/g, "'");
    content = content.replace(/“/g, '"');
    content = content.replace(/�/g, '"');
    
    // Also replace the literal replacement character if it exists
    content = content.replace(/\uFFFD\?"/g, " - ");
    content = content.replace(/\uFFFD\?\uFFFD/g, " - ");
    content = content.replace(/\uFFFD/g, ""); // Catch any remaining ones

    // Let's specifically target the string in page.tsx that is failing
    content = content.replace(/Sri Lanka.*engineered/g, "Sri Lanka - engineered");
    content = content.replace(/infrastructure.*including dredging/g, "infrastructure - including dredging");

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed encoding in ${file}`);
    }
});
