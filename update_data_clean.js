const fs = require('fs');
const files = fs.readdirSync('public/images/IMAGES/RRP').filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

const filePaths = files.map(f => `'/images/IMAGES/RRP/${f}'`);

let c = fs.readFileSync('src/app/projects/data.js', 'utf8');

c = c.replace(
  /heroImage:\s*'.*RRP.*?',/,
  `heroImage: ${filePaths[0]},`
);

c = c.replace(
  /galleryImages:\s*\[.*?RRP.*?\],/,
  `galleryImages: [${filePaths.join(', ')}],`
);

fs.writeFileSync('src/app/projects/data.js', c, 'utf8');
console.log("Updated data.js with clean paths");
