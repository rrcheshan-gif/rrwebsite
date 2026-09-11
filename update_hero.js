const fs = require('fs');

let c = fs.readFileSync('src/app/projects/data.js', 'utf8');

c = c.replace(
  /heroImage:\s*'\/images\/IMAGES\/RRP\/rrp-1\.jpg'/,
  "heroImage: '/images/IMAGES/RRP/rrp-5.jpg'"
);

fs.writeFileSync('src/app/projects/data.js', c, 'utf8');
console.log("Updated heroImage to rrp-5.jpg");
