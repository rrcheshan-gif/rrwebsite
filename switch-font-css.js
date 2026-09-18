const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/"Montserrat"/g, '"Outfit"');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated globals.css fallbacks to Outfit');
