const fs = require('fs');

let c = fs.readFileSync('src/app/projects/data.js', 'utf8');

c = c.replace(
  /\/images\/IMAGES\/RRP\/20240201-074339\.jpg/g,
  '/images/IMAGES/RRP/rrp-1.jpg'
);
c = c.replace(/\/images\/IMAGES\/RRP\/20240201-074620\.jpg/g, '/images/IMAGES/RRP/rrp-2.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/20240201-074651\.jpg/g, '/images/IMAGES/RRP/rrp-3.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/20240201-074941\.jpg/g, '/images/IMAGES/RRP/rrp-4.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/background-image\.jpg/g, '/images/IMAGES/RRP/rrp-5.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/img-20240202-wa0039\.jpg/g, '/images/IMAGES/RRP/rrp-6.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/img-20240202-wa0040\.jpg/g, '/images/IMAGES/RRP/rrp-7.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/img-20240202-wa0044\.jpg/g, '/images/IMAGES/RRP/rrp-8.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/img-20240307-wa0035-1-\.jpg/g, '/images/IMAGES/RRP/rrp-9.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/img-20240307-wa0045\.jpg/g, '/images/IMAGES/RRP/rrp-10.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/img-20240307-wa0049\.jpg/g, '/images/IMAGES/RRP/rrp-11.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/img-20240407-wa0013\.jpg/g, '/images/IMAGES/RRP/rrp-12.jpg');
c = c.replace(/\/images\/IMAGES\/RRP\/img-20240407-wa0015\.jpg/g, '/images/IMAGES/RRP/rrp-13.jpg');

fs.writeFileSync('src/app/projects/data.js', c, 'utf8');
console.log("Updated data.js");
