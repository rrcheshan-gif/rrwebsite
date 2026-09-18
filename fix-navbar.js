const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<header className={`navbar-wrapper ${scrolled ? "scrolled" : ""} home-nav`}>',
  '<header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>'
);
content = content.replace(
  '<header className={`navbar-wrapper ${scrolled ? "scrolled" : ""} ${pathname === "/" ? "home-nav" : ""}`}>',
  '<header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Removed home-nav from Navbar');
