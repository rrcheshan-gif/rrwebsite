const fs = require('fs');
const file = 'src/app/services/maritime-construction/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("backgroundImage: \"url('/images/gandara/gandara-3.jpg')\"", "backgroundImage: \"url('/images/home/slider-maritime-fihladhoo.jpg')\"");

fs.writeFileSync(file, content, 'utf8');
console.log('Updated maritime background image to Fihladhoo.');
