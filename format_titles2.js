const fs = require('fs');

const dataFile = 'src/app/projects/data.js';
let content = fs.readFileSync(dataFile, 'utf8');

function toTitleCase(str) {
    // Determine if it's an ALL CAPS title
    const upperCount = (str.match(/[A-Z]/g) || []).length;
    const letterCount = (str.match(/[a-zA-Z]/g) || []).length;
    const isAllCaps = letterCount > 0 && (upperCount / letterCount) > 0.8;
    
    // If it's mostly uppercase, lower it to capitalize properly, otherwise keep original casing for mixed case words
    let baseStr = isAllCaps ? str.toLowerCase() : str;

    const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
    
    return baseStr.replace(/([^\W_]+[^\s-]*) */g, function(txt, offset, fullStr) {
        let trimmed = txt.trim();
        let trailingSpace = txt.substring(trimmed.length);
        
        // Roman numerals
        if (trimmed.match(/^(i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii)$/i)) {
             return trimmed.toUpperCase() + trailingSpace;
        }

        // Small words
        if (fullStr.indexOf(txt) !== 0 && smallWords.test(trimmed) && fullStr.indexOf(txt) + txt.length !== fullStr.length) {
            return trimmed.toLowerCase() + trailingSpace;
        }
        
        // If it was already mixed case, keep existing uppercase letters but ensure first letter is upper
        // E.g., "B054" -> "B054", "SAGT" -> "SAGT"
        let firstLetter = trimmed.charAt(0).toUpperCase();
        let rest = trimmed.substr(1);
        
        if (isAllCaps) {
             rest = rest.toLowerCase();
        }
        
        return firstLetter + rest + trailingSpace;
    });
}

const regex = /title:\s*(['"])(.*?)\1/g;
let replaced = content.replace(regex, (match, quote, title) => {
    let newTitle = toTitleCase(title);
    return `title: ${quote}${newTitle}${quote}`;
});

fs.writeFileSync(dataFile, replaced, 'utf8');
console.log('Project titles formatted to Title Case successfully.');
