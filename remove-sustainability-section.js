const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const startTag = "{/* SUSTAINABILITY & HSE SECTION */}";
const endTag = "{/* PROJECT HIGHLIGHTS */}";

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    const toRemove = content.substring(startIndex, endIndex);
    content = content.replace(toRemove, "");
    fs.writeFileSync('src/app/page.tsx', content, 'utf8');
    console.log("Successfully removed the Sustainability & HSE section.");
} else {
    console.log("Could not find the section boundaries.");
}
