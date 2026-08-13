const fs = require('fs');

const dataFile = 'src/app/projects/data.js';
let content = fs.readFileSync(dataFile, 'utf8');

function toTitleCase(str) {
    const upperCount = (str.match(/[A-Z]/g) || []).length;
    const letterCount = (str.match(/[a-zA-Z]/g) || []).length;
    const isAllCaps = letterCount > 0 && (upperCount / letterCount) > 0.8;
    
    let baseStr = isAllCaps ? str.toLowerCase() : str;

    const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
    
    // Split by spaces and dashes to process words
    return baseStr.split(/([\s-])/).map((word, index, array) => {
        // if it's a separator, just return it
        if (word.match(/^[\s-]+$/)) return word;
        
        let trimmed = word;
        
        // Roman numerals
        if (trimmed.match(/^(i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii)$/i)) {
             return trimmed.toUpperCase();
        }

        // Small words (don't lowercase if it's the first or last word in the whole string)
        if (index !== 0 && index !== array.length - 1 && smallWords.test(trimmed)) {
            return trimmed.toLowerCase();
        }
        
        let firstLetter = trimmed.charAt(0).toUpperCase();
        let rest = trimmed.substr(1);
        
        if (isAllCaps) {
             rest = rest.toLowerCase();
        }
        
        return firstLetter + rest;
    }).join('');
}

const regex = /title:\s*(['"])(.*?)\1/g;
let replaced = content.replace(regex, (match, quote, title) => {
    let newTitle = toTitleCase(title);
    return `title: ${quote}${newTitle}${quote}`;
});

fs.writeFileSync(dataFile, replaced, 'utf8');
console.log('Project titles formatted to Title Case successfully.');
