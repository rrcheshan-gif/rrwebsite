const fs = require('fs');
const content = fs.readFileSync('src/app/projects/data.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.match(/Rs\.|Million|Billion|LKR|contract value/i)) {
        console.log((i+1) + ': ' + line.trim());
    }
});
