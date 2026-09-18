const fs = require('fs');
const file = 'src/app/about/board-of-directors/page.tsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

// Find the index of "Executive Management"
const index = lines.findIndex(line => line.includes('Executive Management'));
if (index !== -1) {
    // It's wrapped in a div starting 1 line before.
    // The closing div of the grid is a few lines after the map.
    // Let's just drop the lines safely.
    const startIdx = index - 1; // <div style={{ marginBottom: "50px" }}>
    
    // Find the closing </div> for the grid container
    let endIdx = -1;
    for (let i = index; i < lines.length; i++) {
        if (lines[i].includes('))}')) {
            endIdx = i + 2; // skip ))} and </div>
            break;
        }
    }
    
    if (endIdx !== -1) {
        lines.splice(startIdx, endIdx - startIdx + 1);
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
        console.log('Successfully removed lines', startIdx, 'to', endIdx);
    } else {
        console.log('Could not find end index');
    }
}
