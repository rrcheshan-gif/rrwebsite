const fs = require('fs');

// Update Navbar
let navContent = fs.readFileSync('src/app/components/Navbar.tsx', 'utf8');
navContent = navContent.replace(
    /<li><Link href="\/resources\/concrete" onClick=\{\(\) => setMobileMenuOpen\(false\)\}>Concrete<\/Link><\/li>/,
    '<li><Link href="/resources/concrete" onClick={() => setMobileMenuOpen(false)}>Ready Mix Concrete</Link></li>'
);
fs.writeFileSync('src/app/components/Navbar.tsx', navContent, 'utf8');

// Update Concrete Page
let pageContent = fs.readFileSync('src/app/resources/concrete/page.tsx', 'utf8');
pageContent = pageContent.replace(
    /Concrete <span style=\{\{ color: "var\(--primary-red\)" \}\}>Batching Plants<\/span>/g,
    'Ready Mix <span style={{ color: "var(--primary-red)" }}>Concrete</span>'
);
pageContent = pageContent.replace(
    /Concrete Batching <span className="text-gradient" style=\{\{ fontWeight: 300 \}\}>Plants<\/span>/g,
    'Ready Mix <span className="text-gradient" style={{ fontWeight: 300 }}>Concrete</span>'
);

// We should also replace the metadata / <title> if it exists, or just leave as is since we updated headers.

fs.writeFileSync('src/app/resources/concrete/page.tsx', pageContent, 'utf8');

console.log("Renamed to Ready Mix Concrete successfully.");
