const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldNav = `<li><Link href="/projects/ongoing" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>`;
const newNav = `<li><Link href="/projects/ongoing" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>
                    <li><Link href="/projects/overseas" onClick={() => setMobileMenuOpen(false)}>Overseas Projects</Link></li>`;

content = content.replace(oldNav, newNav);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Navbar');
