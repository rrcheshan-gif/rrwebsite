const fs = require('fs');
const path = require('path');

const dir = 'public/images/IMAGES/RRP';
const files = fs.readdirSync(dir);
let counter = 1;
const oldToNew = {};

files.forEach((file) => {
  if (!file.endsWith('.jpg') && !file.endsWith('.jpeg') && !file.endsWith('.png')) return;
  
  const ext = path.extname(file);
  const newName = `rrp-${counter}${ext}`;
  
  if (file !== newName) {
    fs.renameSync(path.join(dir, file), path.join(dir, newName));
    oldToNew[file] = newName;
  }
  counter++;
});

console.log(JSON.stringify(oldToNew, null, 2));
