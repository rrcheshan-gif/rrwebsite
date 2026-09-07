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
    const content = fs.readFileSync(f, 'utf8');
    if (content.match(/&[a-z]+;/gi)) {
        console.log('Entities in ' + f);
    }
});
