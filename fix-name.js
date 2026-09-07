const fs = require('fs');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');
let changedFiles = [];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    if (content.includes('Senadheera')) {
        content = content.replace(/Senadheera/g, 'Senadhera');
        fs.writeFileSync(f, content, 'utf8');
        changedFiles.push(f);
    }
});

console.log('Changed in: ', changedFiles.join(', '));
