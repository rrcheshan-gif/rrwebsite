const fs = require('fs');

const content = fs.readFileSync('src/app/people/page.tsx', 'utf8');

const oldText = 'We are profoundly committed to the continuous professional evolution of our workforce.';
const newText = 'We are profoundly committed to the Continuous Professional Development (CPD) of our workforce.';

let newContent = content.replace(oldText, newText);

fs.writeFileSync('src/app/people/page.tsx', newContent, 'utf8');
console.log('Updated CPD details successfully');
