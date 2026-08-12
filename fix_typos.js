const fs = require('fs');
const file = 'src/app/projects/data.js';
let content = fs.readFileSync(file, 'utf8');

// Fix Vauniya -> Vavuniya
content = content.replace(/Vauniya/g, 'Vavuniya');
// Fix Hambanthota -> Hambantota
content = content.replace(/Hambanthota/g, 'Hambantota');
// Fix Kaburugamuwa -> Kamburugamuwa
content = content.replace(/Kaburugamuwa/g, 'Kamburugamuwa');

fs.writeFileSync(file, content, 'utf8');
console.log("Fixed typos.");
