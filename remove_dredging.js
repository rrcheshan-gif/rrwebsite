const fs = require('fs');

const file = 'src/app/services/maritime-construction/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\/\* Dredging & Reclamation Callout \*\/\}[\s\S]*?<\/section>/;

if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed Dredging Callout');
} else {
    console.log('Not found');
}
