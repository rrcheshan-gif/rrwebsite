const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else if (file.endsWith('page.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir('src/app');

files.forEach(file => {
    if (file.includes('components') || file.includes('plant') || file.includes('[id]')) return;
    
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace all weird characters before "Back to Home"
    content = content.replace(/[^>]*Back to Home/g, '&larr; Back to Home');
    
    // Some lines might now have `<Link ...>&larr; Back to Home` which is exactly what we want.
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log("Fixed encoding issues.");
