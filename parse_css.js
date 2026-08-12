const fs = require('fs');
const css = fs.readFileSync('src/app/globals.css', 'utf8');

const regex = /@media\s*([^{]+)\{/g;
let match;
while ((match = regex.exec(css)) !== null) {
    let start = match.index + match[0].length;
    let braces = 1;
    let end = start;
    while (braces > 0 && end < css.length) {
        if (css[end] === '{') braces++;
        else if (css[end] === '}') braces--;
        end++;
    }
    
    let content = css.substring(start, end - 1);
    if (content.includes('.nav-links')) {
        console.log('--- MEDIA QUERY: ' + match[1].trim() + ' ---');
        let lines = content.split('\n');
        for (let l of lines) {
            if (l.includes('.nav-links')) console.log(l);
        }
    }
}

// Also check outside media queries
console.log('--- OUTSIDE MEDIA QUERIES ---');
let outside = css.replace(/@media[^{]+\{([\s\S]*?})\s*}/g, '');
let lines = outside.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('.nav-links')) {
        console.log('Line ' + i + ': ' + lines[i]);
    }
}
