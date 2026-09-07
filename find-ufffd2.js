const fs = require('fs');
const content = fs.readFileSync('src/app/services/page.tsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.includes('\uFFFD')) {
        console.log((i+1) + ': ' + line.trim());
    }
});
