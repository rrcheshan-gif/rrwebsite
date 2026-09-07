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
    
    // Remove ugly justification
    content = content.replace(/textAlign: "justify", textJustify: "inter-word",/g, "");
    content = content.replace(/textAlign: 'justify', textJustify: 'inter-word',/g, "");
    content = content.replace(/textAlign: "justify",/g, "");
    content = content.replace(/textAlign: 'justify',/g, "");

    // The user also mentioned mobile view issues. Let's make sure the container padding on mobile is good.
    // Sometimes I hardcoded padding that might be too large. 
    // We'll leave that to checking specific files if needed, but text-align justify is the biggest offender for "spaces in paragraphs".
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed text justification in ${file}`);
    }
});
