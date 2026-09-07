const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

// Find the parts to swap
const introStart = content.indexOf('<p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>              Founded in {COMPANY_DATA.established}');
const introEnd = content.indexOf('</p>', content.indexOf('By integrating an expansive')) + 4; // gets the end of the second paragraph
const introBlock = content.substring(introStart, introEnd);

const mdStart = content.indexOf('<div style={{ background: "rgba(229, 57, 53, 0.05)", padding: "35px 30px", borderRadius: "20px", borderLeft: "4px solid var(--primary-red)", position: "relative", marginBottom: "30px" }}>');
const mdEnd = content.indexOf('</div>', content.indexOf('Managing Director, RR Construction (Pvt) Ltd</p>')) + 6; // finds closing div for MD block
const mdBlock = content.substring(mdStart, mdEnd);

if (introStart !== -1 && mdStart !== -1) {
    // We need to replace the entire section from introStart to mdEnd with mdBlock then introBlock
    const originalSection = content.substring(introStart, mdEnd);
    const newSection = mdBlock + '\n\n' + introBlock;
    
    let newContent = content.replace(originalSection, newSection);
    fs.writeFileSync('src/app/about/company-overview/page.tsx', newContent, 'utf8');
    console.log('Successfully swapped MD Message and Intro');
} else {
    console.log('Could not find the blocks');
}
