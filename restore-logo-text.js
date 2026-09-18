const fs = require('fs');
let content = fs.readFileSync('src/app/components/Navbar.tsx', 'utf8');

content = content.replace(
  /<img src="\/images\/logo\.png" alt="RR Construction Logo" className="nav-logo-img" \/>/,
  `<img src="/images/logo.png" alt="RR Construction Logo" className="nav-logo-img" />
                <div className="logo-text">
                  <span className="logo-title">Construction</span>
                  <span className="logo-sub">(Pvt) Ltd</span>
                </div>`
);

fs.writeFileSync('src/app/components/Navbar.tsx', content, 'utf8');
console.log('Restored logo text');
