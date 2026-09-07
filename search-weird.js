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
let found = 0;
files.forEach(f => {
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    lines.forEach((line, i) => {
        if (/[^\x00-\x7F]/.test(line)) {
            // print lines with non-ascii characters
            console.log(f + ':' + (i+1) + ' -> ' + line.trim());
            found++;
        }
    });
});
if(found===0) console.log('None found');
