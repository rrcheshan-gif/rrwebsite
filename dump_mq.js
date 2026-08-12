const fs = require('fs');
const css = fs.readFileSync('src/app/globals.css', 'utf8');

const regex = /@media\s*\(max-width:\s*1366px\)\s*\{/g;
let match;
let i = 1;
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
    console.log('--- MEDIA QUERY ' + i + ' ---');
    console.log(content.substring(0, 300) + '...');
    i++;
}
