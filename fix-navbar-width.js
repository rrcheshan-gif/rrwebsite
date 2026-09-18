const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'width: clamp(96%, 98vw, 1500px); max-width: 1500px;',
  'width: 96%; max-width: 1500px;'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed navbar width');
