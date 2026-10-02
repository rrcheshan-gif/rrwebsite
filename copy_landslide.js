const fs = require('fs');
const path = require('path');

const srcDir = path.join('public', 'ONGOING PROJECTS', 'Landslide');
const destDir = path.join('public', 'images', 'projects', 'ongoing', 'landslide');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
const galleryPaths = [];

files.forEach((file, index) => {
    const ext = path.extname(file);
    const newName = `img-${index + 1}${ext}`;
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, newName);
    
    fs.copyFileSync(srcPath, destPath);
    galleryPaths.push(`'/images/projects/ongoing/landslide/${newName}'`);
});

console.log('--- GALLERY ARRAY ---');
console.log(galleryPaths.join(',\n'));
