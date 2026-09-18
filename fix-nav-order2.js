const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// The simplest way is to find the UL and replace its contents.
const ulStart = content.indexOf('<ul className="dropdown-menu">', content.indexOf('Projects <ChevronDown'));
const ulEnd = content.indexOf('</ul>', ulStart);

const oldUlContent = content.substring(ulStart, ulEnd);

const newUlContent = `<ul className="dropdown-menu">
                  <li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Completed Projects</Link></li>
                  <li><Link href="/projects/overseas" onClick={() => setMobileMenuOpen(false)}>Overseas Projects</Link></li>
                  <li><Link href="/projects/ongoing" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>
                `;

content = content.substring(0, ulStart) + newUlContent + content.substring(ulEnd);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed dropdown order properly');
