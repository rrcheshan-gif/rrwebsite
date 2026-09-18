const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Remove the glow rule I just added
content = content.replace(/\.navbar-wrapper\.home-nav:not\(\.scrolled\) \.nav-logo-img \{[^}]+\}/, '');

// Add the white backing rule
const newLogoRule = `
.navbar-wrapper.home-nav:not(.scrolled) .nav-logo-img {
  background: rgba(255, 255, 255, 0.95);
  padding: 4px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
`;

content += '\n' + newLogoRule;
fs.writeFileSync(file, content, 'utf8');
console.log('Added white backing to logo');
