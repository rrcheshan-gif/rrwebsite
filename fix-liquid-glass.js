const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Scrolled Nav Replacement
content = content.replace(
  'background-color: rgba(255, 255, 255, 0.95);',
  'background-color: rgba(255, 255, 255, 0.75);'
);
content = content.replace(
  /backdrop-filter: blur\(20px\) saturate\(160\%\);/g,
  'backdrop-filter: blur(24px) saturate(180%);'
);
content = content.replace(
  /-webkit-backdrop-filter: blur\(20px\) saturate\(160\%\);/g,
  '-webkit-backdrop-filter: blur(24px) saturate(180%);'
);

// Default Nav Replacement
content = content.replace(
  'background-color: var(--surface-glass-solid, rgba(255,255,255,0.95));',
  'background-color: rgba(255, 255, 255, 0.75);'
);
content = content.replace(
  /backdrop-filter: blur\(20px\);\s*border: 1px solid var\(--glass-border\);/g,
  'backdrop-filter: blur(24px) saturate(180%);\n  -webkit-backdrop-filter: blur(24px) saturate(180%);\n  border: 1px solid var(--glass-border);'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Applied liquid glass effect');
