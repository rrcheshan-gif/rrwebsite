const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldLogo = `<img src="/images/logo.png" alt="RR Construction Logo" className="nav-logo-img" />
                <div className="logo-text">
                  <span className="logo-title">Construction</span>
                  <span className="logo-sub">(Pvt) Ltd</span>
                </div>`;
                
const newLogo = `<img src="/images/logo.png" alt="RR Construction Logo" className="nav-logo-img" />`;

content = content.replace(oldLogo, newLogo);

fs.writeFileSync(file, content, 'utf8');
console.log('Removed Navbar logo text');
