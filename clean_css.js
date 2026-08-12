const fs = require('fs');
const file = 'src/app/globals.css';
let css = fs.readFileSync(file, 'utf8');

// Find the first `@media (max-width: 1366px)` block
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
    
    // the content of the first media query
    let content = css.substring(start, end - 1);
    
    // Remove all .nav-links rules from it
    let cleanContent = content.replace(/\s*(\[data-theme="dark"\]\s*)?\.nav-links\s*(>.*|\.active|\s*)\{[^}]+\}/g, '');
    
    // Also remove the dropdown rules that were part of the old mobile menu pill, if they are there
    // cleanContent = cleanContent.replace(/\s*\.dropdown-menu\s*\{[^}]+\}/g, '');
    
    // Replace in main CSS
    css = css.substring(0, start) + cleanContent + css.substring(end - 1);
    fs.writeFileSync(file, css, 'utf8');
    console.log("Successfully cleaned up conflicting nav-links rules in the first media query.");
} else {
    console.log("Media query not found.");
}
