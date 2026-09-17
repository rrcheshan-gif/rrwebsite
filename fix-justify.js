const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

const oldP = `p {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.75;
  letter-spacing: -0.01em;
}`;

const newP = `p {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.75;
  letter-spacing: -0.015em;
  word-spacing: -0.05em; /* Reduces large gaps between words in justified text */
  overflow-wrap: break-word;
}`;

content = content.replace(oldP, newP);

// If it's different, let's just use regex to replace the global p { ... } block
if (content.indexOf(newP) === -1) {
  content = content.replace(/p\s*\{\s*text-align:\s*justify;[\s\S]*?\}/, newP);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Updated global p tag to reduce gaps while keeping justify');
