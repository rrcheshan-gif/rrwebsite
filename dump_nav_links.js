const fs = require('fs');
const css = fs.readFileSync('src/app/globals.css', 'utf8');

const regex = /@media\s*\(max-width:\s*1366px\)\s*\{/g;
let match = regex.exec(css);
if (match) {
    let start = match.index + match[0].length;
    let braces = 1;
    let end = start;
    while (braces > 0 && end < css.length) {
        if (css[end] === '{') braces++;
        else if (css[end] === '}') braces--;
        end++;
    }
    let content = css.substring(start, end - 1);
    
    // Find .nav-links inside this content
    let navLinksRegex = /\.nav-links\s*\{[^}]+\}/g;
    let match2;
    while ((match2 = navLinksRegex.exec(content)) !== null) {
        console.log(match2[0]);
    }
}
