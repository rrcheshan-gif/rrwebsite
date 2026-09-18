const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

content = content.replace(
  /\.logo-text, \.footer-logo-text \{\s*display: flex !important;\s*flex-direction: column !important;\s*justify-content: center !important;\s*transform: translateY\(-5px\) !important;\s*\}/,
  `.logo-text, .footer-logo-text {
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      transform: translateY(2px) !important;
    }`
);

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log('Adjusted translateY to bring text down');
