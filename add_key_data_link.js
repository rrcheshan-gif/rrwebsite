const fs = require('fs');

// 1. Update Navbar
let navContent = fs.readFileSync('src/app/components/Navbar.tsx', 'utf8');
navContent = navContent.replace(
    '<li><Link href="/about/company-overview" onClick={() => setMobileMenuOpen(false)}>RR Overview</Link></li>',
    '<li><Link href="/about/company-overview" onClick={() => setMobileMenuOpen(false)}>RR Overview</Link></li>\n                  <li><Link href="/about/key-data" onClick={() => setMobileMenuOpen(false)}>Key Data</Link></li>'
);
fs.writeFileSync('src/app/components/Navbar.tsx', navContent, 'utf8');
console.log('Updated Navbar with Key Data link.');

