const fs = require('fs');
const files = fs.readdirSync('public/images/IMAGES/RRP').filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

const filePaths = files.map(f => `'/images/IMAGES/RRP/${f}'`);
console.log("Hero: " + filePaths[0]);
console.log("Gallery: " + filePaths.join(', '));
