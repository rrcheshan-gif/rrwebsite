const fs = require('fs');
const file = 'src/app/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldLogo = `<div className="footer-logo-text">
                  <span className="logo-title" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Construction</span>
                  <span className="logo-sub" style={{ fontFamily: "'Times New Roman', Times, serif" }}>(Pvt) Ltd</span>
                </div>`;
                
const newLogo = ``;

content = content.replace(oldLogo, newLogo);

fs.writeFileSync(file, content, 'utf8');
console.log('Removed Footer logo text');
