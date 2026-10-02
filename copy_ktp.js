const fs = require('fs');
const path = require('path');

const srcDir = path.join('public', 'ONGOING PROJECTS', 'KTP');
const destDir = path.join('public', 'images', 'projects', 'ongoing', 'irrigation');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
const newPaths = [];

files.forEach((file, index) => {
    const ext = path.extname(file);
    const newName = `ktp-${index + 1}${ext}`;
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, newName);
    
    fs.copyFileSync(srcPath, destPath);
    newPaths.push(`'/images/projects/ongoing/irrigation/${newName}'`);
});

console.log('--- NEW IMAGE PATHS ---');
console.log(newPaths.join(',\n'));
