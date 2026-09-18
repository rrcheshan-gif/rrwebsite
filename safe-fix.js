const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldBlock = `                  <ul className="dropdown-menu">
                  <li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Completed Projects</Link></li>
                  <li><Link href="/projects/ongoing" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>
                    <li><Link href="/projects/overseas" onClick={() => setMobileMenuOpen(false)}>Overseas Projects</Link></li>
                </ul>`;

const newBlock = `                  <ul className="dropdown-menu">
                  <li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Completed Projects</Link></li>
                  <li><Link href="/projects/overseas" onClick={() => setMobileMenuOpen(false)}>Overseas Projects</Link></li>
                  <li><Link href="/projects/ongoing" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>
                </ul>`;

// Let's just do a regex replace to avoid indentation mismatches
content = content.replace(/<li><Link href="\/projects\/ongoing"[\s\S]*?<\/Link><\/li>\s*<li><Link href="\/projects\/overseas"[\s\S]*?<\/Link><\/li>/g, 
`<li><Link href="/projects/overseas" onClick={() => setMobileMenuOpen(false)}>Overseas Projects</Link></li>
                  <li><Link href="/projects/ongoing" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed properly');
