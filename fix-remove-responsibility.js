const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const startStr = '{/* Engineering With Responsibility */}';
const endStr = '{/* CTA Section */}';

let startIdx = content.indexOf(startStr);
let endIdx = content.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
    let newContent = content.substring(0, startIdx) + content.substring(endIdx);
    fs.writeFileSync('src/app/about/company-overview/page.tsx', newContent, 'utf8');
    console.log('Successfully removed the Engineering With Responsibility section!');
} else {
    console.log('Could not find start or end index.');
}
