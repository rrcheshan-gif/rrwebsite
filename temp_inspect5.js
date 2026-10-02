const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

const startMachine = 9703;
const endPiling = 14763;
const formStart = 17577;
const formEnd = 21689; // Wait, let's recalculate the exact form end

// The cards string to move:
const cardsToMove = content.substring(startMachine, endPiling);

// Let's remove the cards from their original location
content = content.substring(0, startMachine) + content.substring(endPiling);

// Now find where the form is.
// The form starts with:
// <div style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)"
const newFormStart = content.indexOf('<div style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)"');

// The form ends with:
//               </form>
//             </div>
const formEndRegex = /<\/form>\s*<\/div>/;
const formEndMatch = content.match(formEndRegex);

if (newFormStart !== -1 && formEndMatch) {
    const endIdx = formEndMatch.index + formEndMatch[0].length;
    
    // Wrap the right side in a flex column div
    const newRightSide = 
\<div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              \ + content.substring(newFormStart, endIdx) + \
              
              \ + cardsToMove + \
            </div>\;
            
    content = content.substring(0, newFormStart) + newRightSide + content.substring(endIdx);
    fs.writeFileSync('src/app/contact/page.tsx', content, 'utf8');
    console.log("Moved cards successfully!");
} else {
    console.log("Could not find form start/end");
}
