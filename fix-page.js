const fs = require('fs');
let content = fs.readFileSync('src/app/projects/[id]/page.tsx', 'utf8');

// The replacement replaced timePhrase with timeAndDuration, but didn't update the usage!
content = content.replace(
  /<p style="margin-bottom: 20px;">\$\{timePhrase\}\$\{durationPhrase\}, showcasing RR Construction's unwavering commitment to delivering large-scale infrastructure on schedule without sacrificing quality\.<\/p>/,
  '<p style="margin-bottom: 20px;">\, showcasing RR Construction\\'s unwavering commitment to delivering large-scale infrastructure on schedule without sacrificing quality.</p>'
);

fs.writeFileSync('src/app/projects/[id]/page.tsx', content, 'utf8');
console.log('Fixed page.');
