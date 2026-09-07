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
            if(file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.md')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;
    
    if (content.includes('\uFFFD?"')) {
        content = content.replace(/\uFFFD\?"/g, ' - ');
        changed = true;
    }
    if (content.includes('\uFFFD"?\uFFFD"')) {
        content = content.replace(/\uFFFD"\?\uFFFD"/g, ' --- ');
        changed = true;
    }
    if (content.includes('A\uFFFD')) {
        content = content.replace(/A\uFFFD/g, ' · ');
        changed = true;
    }
    if (content.includes('\uFFFD')) {
        content = content.replace(/\uFFFD/g, '-');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(f, content, 'utf8');
        console.log('Fixed encoding in ' + f);
    }
});
