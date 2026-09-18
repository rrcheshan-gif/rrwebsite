const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// I will just replace the exact text blocks for both occurrences
content = content.replace(
  /<li><Link href="\/projects"[\s\S]*?<li><Link href="\/projects\/ongoing"[\s\S]*?<li><Link href="\/projects\/overseas"[\s\S]*?<\/li>/g,
  `<li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Completed Projects</Link></li>
                  <li><Link href="/projects/overseas" onClick={() => setMobileMenuOpen(false)}>Overseas Projects</Link></li>
                  <li><Link href="/projects/ongoing" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed both occurrences');
