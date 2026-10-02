const fs = require('fs');

// Add a hover class to globals.css
let cssPath = 'src/app/globals.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent += `\n.footer-social-icon:hover {\n  transform: translateY(-3px) scale(1.05);\n  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);\n}\n`;
fs.writeFileSync(cssPath, cssContent, 'utf8');

// Update Footer.tsx to use this class
let tsxPath = 'src/app/components/Footer.tsx';
let tsxContent = fs.readFileSync(tsxPath, 'utf8');
tsxContent = tsxContent.replace(/<a href/g, '<a className="footer-social-icon" href');
fs.writeFileSync(tsxPath, tsxContent, 'utf8');

console.log("Added hover effect class and applied to Footer");
