const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

const logoGlowRule = `
.navbar-wrapper.home-nav:not(.scrolled) .nav-logo-img {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 2px rgba(255, 255, 255, 1));
}
`;

if (!content.includes('.nav-logo-img {\\n  filter: drop-shadow')) {
    content += '\n' + logoGlowRule;
    fs.writeFileSync(file, content, 'utf8');
    console.log('Added logo glow rule');
}
