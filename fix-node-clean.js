const fs = require('fs');

let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const introStart = content.indexOf('<p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>');
const introEnd = content.indexOf('</p>', content.indexOf('international quality protocols.')) + 4;
const introBlock = content.substring(introStart, introEnd);

const mdStart = content.indexOf('<div style={{ background: "rgba(229, 57, 53, 0.05)", padding: "35px 30px"');
const mdEnd = content.indexOf('</div>', content.indexOf('Managing Director, RR Construction (Pvt) Ltd</p>')) + 6;
// Add the two closing divs that belong to that block
const mdBlockFullEnd = content.indexOf('</div>', content.indexOf('</div>', mdEnd) + 1) + 6;
const mdBlock = content.substring(mdStart, mdBlockFullEnd);

if (introStart !== -1 && mdStart !== -1) {
    // Cut them out
    content = content.replace(introBlock, '');
    content = content.replace(mdBlock, '');

    // Find insertion point
    const insertPoint = content.indexOf('</h3>', content.indexOf('A Legacy of Engineering')) + 5;

    const newContent = content.substring(0, insertPoint) + '\n\n' + mdBlock + '\n\n' + introBlock + content.substring(insertPoint);

    fs.writeFileSync('src/app/about/company-overview/page.tsx', newContent, 'utf8');
    console.log('Swapped correctly!');
} else {
    console.log('Could not find blocks');
}
