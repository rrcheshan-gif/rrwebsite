const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Update typography scaling
content = content.replace(
  'h2 { font-size: clamp(1.5rem, 6vw, 2rem) !important; }',
  'h2 { font-size: clamp(1.8rem, 6vw, 2.25rem) !important; }'
);
content = content.replace(
  'h3 { font-size: clamp(1.2rem, 5vw, 1.5rem) !important; }',
  'h3 { font-size: clamp(1.3rem, 5vw, 1.75rem) !important; }'
);
content = content.replace(
  'p { font-size: 1rem !important; line-height: 1.7 !important; }',
  'p { font-size: 1.1rem !important; line-height: 1.75 !important; }'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated font sizes in globals.css');
