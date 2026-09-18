const fs = require('fs');
let content = fs.readFileSync('src/app/components/Navbar.tsx', 'utf8');

const regex = /(<li className={`dropdown \$\{activeDropdown === 'services' \? 'open' : ''\}`}>\s*<div className="dropdown-header">[\s\S]*?<\/div>\s*)<ul className="dropdown-menu">[\s\S]*?<\/ul>/;

const newServicesDropdown = `<ul className="dropdown-menu">
                  <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Technology &amp; Services Overview</Link></li>
                  <li><Link href="/services/highway-and-expressway-construction" onClick={() => setMobileMenuOpen(false)}>Highway &amp; Expressway</Link></li>
                  <li><Link href="/services/bridge-construction" onClick={() => setMobileMenuOpen(false)}>Bridge Construction</Link></li>
                  <li><Link href="/services/maritime-construction" onClick={() => setMobileMenuOpen(false)}>Maritime Construction</Link></li>
                  <li><Link href="/services/dredging-reclamation" onClick={() => setMobileMenuOpen(false)}>Dredging &amp; Reclamation</Link></li>
                  <li><Link href="/services/water-infrastructure" onClick={() => setMobileMenuOpen(false)}>Water Infrastructure</Link></li>
                  <li><Link href="/services/landslide-mitigation" onClick={() => setMobileMenuOpen(false)}>Landslide Mitigation</Link></li>
                  <li><Link href="/services/buildings-structures" onClick={() => setMobileMenuOpen(false)}>Civil Structures</Link></li>
                  <li><Link href="/services/railway-civil-works" onClick={() => setMobileMenuOpen(false)}>Railway Civil Works</Link></li>
                  <li><Link href="/services/research-development" onClick={() => setMobileMenuOpen(false)}>Research &amp; Development</Link></li>
                </ul>`;

if (content.match(regex)) {
    content = content.replace(regex, `$1` + newServicesDropdown);
    fs.writeFileSync('src/app/components/Navbar.tsx', content, 'utf8');
    console.log('Updated services dropdown successfully via constrained regex');
} else {
    console.log('Could not match constrained regex');
}
