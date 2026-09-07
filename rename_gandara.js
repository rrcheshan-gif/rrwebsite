const fs = require('fs');
const path = require('path');

const dir = 'public/images/IMAGES/Gandara';
const files = fs.readdirSync(dir);

let counter = 1;
for (const file of files) {
    if (file === 'Background image.jpeg') {
        fs.renameSync(path.join(dir, file), path.join(dir, 'gandara-bg.jpeg'));
    } else if (file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png')) {
        fs.renameSync(path.join(dir, file), path.join(dir, `gandara-${counter}.jpeg`));
        counter++;
    }
}

console.log('Renamed files in Gandara folder to safe names.');
