const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldStr = `                  <ul className="dropdown-menu">
                    <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Technology &amp; Services</Link></li>
                    <li><Link href="/services/research-development" onClick={() => setMobileMenuOpen(false)}>Research &amp; Development</Link></li>
                    <li><Link href="/facilities" onClick={() => setMobileMenuOpen(false)}>Quarries &amp; Aggregates</Link></li>
                  </ul>`;

const newStr = `                  <ul className="dropdown-menu">
                    <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Technology &amp; Services</Link></li>
                    <li><Link href="/facilities" onClick={() => setMobileMenuOpen(false)}>Quarries &amp; Aggregates</Link></li>
                    <li><Link href="/services/research-development" onClick={() => setMobileMenuOpen(false)}>Research &amp; Development</Link></li>
                  </ul>`;

content = content.replace(oldStr, newStr);

// Also try fallback with carriage returns just in case
const oldStrCr = `                  <ul className="dropdown-menu">\r\n                    <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Technology &amp; Services</Link></li>\r\n                    <li><Link href="/services/research-development" onClick={() => setMobileMenuOpen(false)}>Research &amp; Development</Link></li>\r\n                    <li><Link href="/facilities" onClick={() => setMobileMenuOpen(false)}>Quarries &amp; Aggregates</Link></li>\r\n                  </ul>`;
const newStrCr = `                  <ul className="dropdown-menu">\r\n                    <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Technology &amp; Services</Link></li>\r\n                    <li><Link href="/facilities" onClick={() => setMobileMenuOpen(false)}>Quarries &amp; Aggregates</Link></li>\r\n                    <li><Link href="/services/research-development" onClick={() => setMobileMenuOpen(false)}>Research &amp; Development</Link></li>\r\n                  </ul>`;

content = content.replace(oldStrCr, newStrCr);

fs.writeFileSync(file, content, 'utf8');
console.log('Reordered Research & Development to the bottom of the dropdown');
