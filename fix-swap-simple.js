const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const p1Start = content.indexOf('<p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>');
const p2End = content.indexOf('</p>', content.indexOf('international quality protocols.')) + 4;
const introBlock = content.substring(p1Start, p2End);

const mdStart = content.indexOf('<div style={{ background: "rgba(229, 57, 53, 0.05)"');
const mdEnd = content.indexOf('</div>', content.indexOf('Managing Director, RR Construction (Pvt) Ltd</p>')) + 6;
const mdBlock = content.substring(mdStart, mdEnd);

let newContent = content.replace(mdBlock, '');
newContent = newContent.replace(introBlock, '');
newContent = newContent.substring(0, p1Start) + mdBlock + '\n\n' + introBlock + newContent.substring(p1Start);

fs.writeFileSync('src/app/about/company-overview/page.tsx', newContent, 'utf8');
console.log('Swapped effectively');
