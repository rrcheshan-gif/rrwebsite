const fs = require('fs');
const file = 'src/app/services/road-construction/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\/\*\s*7\.\s*Selected Road Projects\s*\*\/\}[\s\S]*?<\/section>/;
if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed Selected Road Projects section.');
} else {
    console.log('Could not find section.');
}
