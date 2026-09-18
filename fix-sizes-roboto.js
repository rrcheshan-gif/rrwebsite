const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'h3 { font-size: clamp(1.3rem, 5vw, 1.75rem) !important; }',
  'h3 { font-size: clamp(1.15rem, 4vw, 1.25rem) !important; }'
);
content = content.replace(
  'p { font-size: 1.1rem !important; line-height: 1.75 !important; }',
  'p { font-size: 0.95rem !important; line-height: 1.6 !important; margin-bottom: 1rem; }'
);

// We should also make h2 slightly smaller to fit the scale proportionately
content = content.replace(
  'h2 { font-size: clamp(1.8rem, 6vw, 2.25rem) !important; }',
  'h2 { font-size: clamp(1.5rem, 5vw, 1.875rem) !important; }'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Adjusted font sizes');
