const fs = require('fs');
const file = 'src/app/services/water-infrastructure/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\/\*\s*Selected Projects\s*\*\/\}[\s\S]*?<\/section>/;
if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed Featured Water Projects section.');
}
