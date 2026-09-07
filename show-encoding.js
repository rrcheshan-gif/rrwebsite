const fs = require('fs');
const files = [
    'src/app/page.tsx', 
    'src/app/services/bridge-construction/page.tsx', 
    'src/app/services/dredging-reclamation/page.tsx', 
    'src/app/services/road-construction/page.tsx'
];

files.forEach(f => {
    console.log('--- ' + f + ' ---');
    const lines = fs.readFileSync(f, 'utf8').split('\n');
    lines.forEach((line, i) => {
        if (line.includes('\uFFFD') || line.includes('?"')) {
            console.log((i+1) + ': ' + line.trim());
        }
    });
});
