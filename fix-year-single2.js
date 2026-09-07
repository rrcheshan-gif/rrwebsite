const fs = require('fs');
const content = fs.readFileSync('src/app/projects/[id]/page.tsx', 'utf8');

const regex = /\{project\.type !== 'ongoing' && \([\s\n]*<div>[\s\n]*<h4[^>]*>Completion Year<\/h4>[\s\n]*<p[^>]*>\{project\.year\}<\/p>[\s\n]*<\/div>[\s\n]*\)\}/g;
if (regex.test(content)) {
    const newContent = content.replace(regex, '');
    fs.writeFileSync('src/app/projects/[id]/page.tsx', newContent, 'utf8');
    console.log('Removed ONLY Completion Year block from single page');
} else {
    console.log('Block not found in single page');
}
