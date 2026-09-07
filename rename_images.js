const fs = require('fs');
const path = require('path');

const dir = 'public/images/IMAGES/RRP';
const files = fs.readdirSync(dir);

files.forEach((file) => {
  if (!file.endsWith('.jpg') && !file.endsWith('.jpeg') && !file.endsWith('.png')) return;
  
  // Clean file name
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  
  const newBase = base
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
    
  const newName = `${newBase}${ext}`;
  
  if (file !== newName) {
    fs.renameSync(path.join(dir, file), path.join(dir, newName));
    console.log(`Renamed: ${file} -> ${newName}`);
  }
});
