const fs = require('fs');
const file = 'src/app/services/water-infrastructure/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The water page currently uses backgroundImage: 'url("/images/projects/ampara-water.jpg")' which doesn't exist.
// Let's replace it with a generic image or another valid image.
// What image exists? '/images/wellamankara/building-projects.jpg' or '/images/yakawewa-asphalt.jpg'.
// Or maybe just '/images/home/slider/polished/machinery-enhanced.jpg'.
content = content.replace('url("/images/projects/ampara-water.jpg")', 'url("/images/home/slider/polished/machinery-enhanced.jpg")');
content = content.replace('{/* Image placeholder */}', '');

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced water placeholder.');
