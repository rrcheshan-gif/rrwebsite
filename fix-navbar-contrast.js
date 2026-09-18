const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the transparent wrapper with one that uses default-nav
content = content.replace(
  '<header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>',
  '<header className={`navbar-wrapper ${scrolled ? "scrolled" : "default-nav"}`}>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Restored default-nav class');
