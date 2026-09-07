const fs = require('fs');
const content = fs.readFileSync('src/app/services/page.tsx', 'utf8');
const lines = content.split('\n');
console.log(lines[72].trim());
for (let i=0; i<lines[72].trim().length; i++) {
    console.log(lines[72].trim()[i], lines[72].trim().charCodeAt(i).toString(16));
}
