const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/"Plus Jakarta Sans"/g, '"Montserrat"');

fs.writeFileSync(file, content, 'utf8');
console.log('Updated font fallbacks to Montserrat');
