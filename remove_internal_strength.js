const fs = require('fs');

const file = 'src/app/about/company-overview/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const markerStart = '<section style={{ padding: isMobile ? "60px 10px" : "100px 20px" }}>';
const markerEnd = '</section>';

const startIndex = content.lastIndexOf(markerStart);
const endIndex = content.indexOf(markerEnd, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex + markerEnd.length);
    content = before + after;
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully removed the Unmatched Internal Strength section.');
} else {
    console.log('Could not find markers.');
}
