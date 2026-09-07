const fs = require('fs');
const content = fs.readFileSync('src/app/projects/[id]/page.tsx', 'utf8');

const regex = /\{project\.type !== 'ongoing' && \([\s\S]*?Completion Year[\s\S]*?\)\}/g;
if (regex.test(content)) {
    const newContent = content.replace(regex, '');
    fs.writeFileSync('src/app/projects/[id]/page.tsx', newContent, 'utf8');
    console.log('Removed Completion Year block from single page');
} else {
    console.log('Block not found in single page');
}
