const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

const oldCss = `p {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.75;
  letter-spacing: -0.015em;
  word-spacing: -0.05em; /* Reduces large gaps between words in justified text */
  overflow-wrap: break-word;
}`;

const newCss = `p {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.75;
  letter-spacing: -0.015em;
  word-spacing: -0.05em; /* Reduces large gaps between words in justified text */
  overflow-wrap: break-word;
  margin-bottom: 1.25rem; /* Prevents paragraphs from clustering together */
}`;

if (content.includes(oldCss)) {
  content = content.replace(oldCss, newCss);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Added margin-bottom to global p tag');
} else {
  // Try regex if exact match fails
  content = content.replace(
    /p \{\s*text-align: justify;\s*text-justify: inter-word;\s*line-height: 1\.75;\s*letter-spacing: -0\.015em;\s*word-spacing: -0\.05em;[\s\S]*?overflow-wrap: break-word;\s*\}/,
    newCss
  );
  fs.writeFileSync(file, content, 'utf8');
  console.log('Added margin-bottom to global p tag using regex');
}
