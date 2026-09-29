const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/011-2433427/g, '+94 11-2433427')
            .replace(/011-2430161/g, '+94 11-2430161');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated:', filePath);
        }
    }
}

function walk(dir) {
    let list = fs.readdirSync(dir);
    list.forEach(function(file) {
        let filePath = path.join(dir, file);
        let stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) { 
            walk(filePath);
        } else {
            replaceInFile(filePath);
        }
    });
}

walk('src/app');
