const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Remove white logo background
content = content.replace(/\.navbar-wrapper\.home-nav:not\(\.scrolled\) \.nav-logo-img\s*\{[^}]+\}/, '');

// Adjust navbar to be liquid glass
content = content.replace(/background: rgba\(15, 23, 42, 0\.85\);/, 'background: rgba(15, 23, 42, 0.15);');
content = content.replace(/backdrop-filter: blur\(16px\) saturate\(120\%\);/g, 'backdrop-filter: blur(24px) saturate(120%);');

// Add global top gradient to darken the picture underneath the navbar area
if (!content.includes('body::after {')) {
    content += `\n/* Dark gradient at the very top to make navbar text/logo visible */
body::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
  pointer-events: none;
  z-index: 50;
}\n`;
}

fs.writeFileSync(file, content, 'utf8');
console.log('Updated globals.css with liquid glass and top dark gradient');
