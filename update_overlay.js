const fs = require('fs');
let file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix overlay
content = content.replace(
    /\{mobileMenuOpen && \(\s*<div className="mobile-overlay" onClick=\{\(\) => setMobileMenuOpen\(false\)\}\><\/div>\s*\)\}/,
    '<div className={`mobile-overlay ${mobileMenuOpen ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}></div>'
);

fs.writeFileSync(file, content, 'utf8');
