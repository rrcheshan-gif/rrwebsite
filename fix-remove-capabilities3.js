const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const startStr = '<div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>';
const endStr = '<div style={{ background: "linear-gradient(135deg, #1f2937, #111827)", borderRadius: "32px"';

let startIdx = content.indexOf(startStr);
let endIdx = content.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
    let newContent = content.substring(0, startIdx) + content.substring(endIdx);
    fs.writeFileSync('src/app/about/company-overview/page.tsx', newContent, 'utf8');
    console.log('Successfully removed the block!');
} else {
    console.log('Could not find start or end index.');
}
