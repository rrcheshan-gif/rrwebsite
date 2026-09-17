const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'className={`${outfit.variable} ${manrope.variable}`}',
  'className={`${playfair.variable} ${roboto.variable}`}'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed html tag');
