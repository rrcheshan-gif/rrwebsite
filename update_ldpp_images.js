const fs = require('fs');
const file = 'src/app/projects/data.js';
let content = fs.readFileSync(file, 'utf8');

const updatedImages = `      galleryImages: [
        '/images/IMAGES/LDPP/DJI_0087.jpg',
        '/images/IMAGES/LDPP/IMG_0655.JPG',
        '/images/IMAGES/LDPP/IMG_2426.JPG',
        '/images/IMAGES/LDPP/IMG_2535.JPG',
        '/images/IMAGES/LDPP/ldpp-1.jpeg'
      ]`;

content = content.replace(/galleryImages:\s*\[\s*'\/images\/IMAGES\/LDPP\/DJI_0087\.jpg'\s*\]/, updatedImages);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated');
