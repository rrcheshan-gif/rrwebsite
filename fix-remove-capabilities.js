const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const startStr = '<div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>';
const endStr = '</div>\n            ))}';

let startIndex = content.indexOf(startStr);
if (startIndex !== -1) {
    let tempContent = content.substring(startIndex);
    let endIndex = tempContent.indexOf(endStr);
    if (endIndex !== -1) {
        // Find the end of the </div> after the map block
        let blockToRemove = content.substring(startIndex, startIndex + endIndex + endStr.length + 20); // +20 to catch the closing div of the grid
        
        // Let's use a regex to reliably remove the exact block
        // Actually, just find the whole grid div.
    }
}
