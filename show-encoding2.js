const fs = require('fs');
const files = [
    'src/app/page.tsx', 
    'src/app/services/bridge-construction/page.tsx', 
    'src/app/services/dredging-reclamation/page.tsx', 
    'src/app/services/road-construction/page.tsx'
];

files.forEach(f => {
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    lines.forEach((line, i) => {
        if (line.includes('\uFFFD')) {
            console.log(f + ' -> ' + (i+1) + ': ' + line.trim());
        }
    });
});
