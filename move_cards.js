const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

// The Machine Yard block starts at `<div style={{ background: "var(--white)", padding: "40px", ...`
// Let's use string indexOf to be perfectly accurate without hardcoded indices, since the file length might have changed.

const machineTitle = 'Machine Yard</h3>';
const machineIndex = content.indexOf(machineTitle);

// Find the start of the Machine card
const machineStart = content.lastIndexOf('<div style={{ background: "var(--white)", padding: "40px"', machineIndex);

// The Piling Yard block ends right before the `ul` block for Tel/Fax.
const ulIndex = content.indexOf('<ul style={{ listStyle: "none"');
const pilingEnd = content.lastIndexOf('</div>\n\n', ulIndex) + 6; 
// Wait, the ul card starts with `<div style={{ background: "var(--white)", padding: "40px"...`
const ulCardStart = content.lastIndexOf('<div style={{ background: "var(--white)", padding: "40px"', ulIndex);

const cardsToMove = content.substring(machineStart, ulCardStart);

console.log("Found cards to move length:", cardsToMove.length);

// Remove the cards from left column
content = content.substring(0, machineStart) + content.substring(ulCardStart);

// Find the form
const formStartString = '<div style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)"';
const formStartIndex = content.indexOf(formStartString);
const formEndRegex = /<\/form>\s*<\/div>/;
const match = content.substring(formStartIndex).match(formEndRegex);

if (formStartIndex !== -1 && match) {
    const formEndIndex = formStartIndex + match.index + match[0].length;
    const formContent = content.substring(formStartIndex, formEndIndex);
    
    const newRightSide = `<div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>\n${formContent}\n\n${cardsToMove}\n</div>`;
    
    content = content.substring(0, formStartIndex) + newRightSide + content.substring(formEndIndex);
    fs.writeFileSync('src/app/contact/page.tsx', content, 'utf8');
    console.log("Moved successfully.");
} else {
    console.log("Could not find form");
}
