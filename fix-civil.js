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
            if(file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.json')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // First, temporarily protect existing "Heavy Civil" or "heavy civil"
    content = content.replace(/Heavy Civil Engineering/gi, '___HCE___');
    content = content.replace(/heavy civil engineering/gi, '___HCE___');
    content = content.replace(/Heavy civil engineering/gi, '___HCE___');
    
    content = content.replace(/Civil Engineering/g, 'Heavy Civil Engineering');
    content = content.replace(/Civil engineering/g, 'Heavy Civil engineering');
    content = content.replace(/civil engineering/g, 'heavy civil engineering');
    
    // Restore protected
    content = content.replace(/___HCE___/g, 'Heavy Civil Engineering');
    
    fs.writeFileSync(f, content, 'utf8');
});

console.log('Replaced civil engineering across src directory');
