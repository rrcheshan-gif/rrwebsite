const fs = require('fs');
const file = 'src/app/about/board-of-directors/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace using a robust regex that grabs from the first div before "Executive Management" to the end of the map
const regex = /<div style=\{\{ marginBottom: "50px" \}\}>\s*<h2[^>]*>Executive Management<\/h2>[\s\S]*?\}\)\}\s*<\/div>/;
if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully removed Executive Management using regex');
} else {
    console.log('Regex did not match');
}
