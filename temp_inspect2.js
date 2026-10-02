const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

const machineIndex = content.indexOf('Machine Yard');
const pilingIndex = content.indexOf('Piling Yard');

// Let's find the starting '<div style={{ background: "var(--white)", padding: "40px"' before Machine Yard
const startMachine = content.lastIndexOf('<div style={{ background: "var(--white)", padding: "40px"', machineIndex);

// Let's find the end of Piling Yard. It is followed by the <ul> card (Tel, Fax, Email).
const ulCardIndex = content.indexOf('<ul style={{ listStyle: "none"', pilingIndex);
const endPiling = content.lastIndexOf('<div style={{ background: "var(--white)", padding: "40px"', ulCardIndex);

// Wait, the end of Piling Yard is just before the ulCard.
const pilingBlockEnd = content.lastIndexOf('</div>\n\n<div style={{ background: "var(--white)", padding: "40px"', ulCardIndex) + 6;

console.log("Start Machine:", startMachine);
console.log("End Piling:", pilingBlockEnd);

const theTwoCards = content.substring(startMachine, pilingBlockEnd);

// Let's also find the form div
const formStartIndex = content.indexOf('<div style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)"');
const googleMapIndex = content.indexOf('{/* Google Map Section */}');
// Form ends right before googleMapIndex, inside a </div>
const formEndIndex = content.lastIndexOf('</div>', googleMapIndex - 15) + 6;

console.log("Form Start:", formStartIndex);
console.log("Form End:", formEndIndex);
