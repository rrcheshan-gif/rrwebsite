const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

if (!content.includes('overflow-x: hidden')) {
    content = content.replace('body {', 'body {\n  overflow-x: hidden;');
    fs.writeFileSync('src/app/globals.css', content, 'utf8');
    console.log('Added overflow-x: hidden to body');
}
