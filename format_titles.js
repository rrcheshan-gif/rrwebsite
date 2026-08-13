const fs = require('fs');

const dataFile = 'src/app/projects/data.js';
let content = fs.readFileSync(dataFile, 'utf8');

function toTitleCase(str) {
    const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
    const alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;
    const wordSeparators = /([ :–—-])/;

    return str.split(wordSeparators).map((current, index, array) => {
        if (current.search(alphanumericPattern) === -1) {
            return current;
        }
        
        let word = current.toLowerCase();
        
        if (index !== 0 && index !== array.length - 1 && word.match(smallWords)) {
            return word;
        }
        
        return word.substr(0, 1).toUpperCase() + word.substr(1);
    }).join('');
}

const regex = /title:\s*(['"])(.*?)\1/g;
let replaced = content.replace(regex, (match, quote, title) => {
    let newTitle = toTitleCase(title);
    return `title: ${quote}${newTitle}${quote}`;
});

fs.writeFileSync(dataFile, replaced, 'utf8');
console.log('Project titles formatted to Title Case successfully.');
