const fs = require('fs');

const facilitiesContent = fs.readFileSync('src/app/facilities/page.tsx', 'utf8');
const crusherFile = 'src/app/resources/crusher/page.tsx';
let crusherContent = fs.readFileSync(crusherFile, 'utf8');

// Extract Thudugala Plant
const lines = facilitiesContent.split('\n');
let startIndex = -1;
let endIndex = -1;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`{/* Thudugala Plant */}`)) {
        startIndex = i;
        break;
    }
}

if (startIndex !== -1) {
    for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i];
        braceCount += (line.match(/<div/g) || []).length;
        braceCount -= (line.match(/<\/div>/g) || []).length;
        
        if (i > startIndex && braceCount === 0 && line.includes('</div>')) {
            endIndex = i;
            break;
        }
    }
    
    const thudugala = lines.slice(startIndex, endIndex + 1).join('\n');
    
    // Insert into crusher page before {/* Omanthai Plant */}
    crusherContent = crusherContent.replace('{/* Omanthai Plant */}', thudugala + '\n            {/* Omanthai Plant */}');
    
    fs.writeFileSync(crusherFile, crusherContent, 'utf8');
    console.log('Successfully added Thudugala to Crusher page');
} else {
    console.log('Could not find Thudugala block');
}
