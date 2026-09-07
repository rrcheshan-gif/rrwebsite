const fs = require('fs');
let c = fs.readFileSync('src/app/components/Navbar.tsx', 'utf8');

// Remove desktop toggle button
c = c.replace(
  `                <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">\r\n                  {theme === 'light' ? '\uD83C\uDF19' : '\u2600\uFE0F'}\r\n                </button>\r\n`,
  ''
);

// Remove mobile toggle button
c = c.replace(
  `              <button onClick={toggleTheme} className="theme-toggle mobile-only-toggle" aria-label="Toggle Dark Mode">\r\n                {theme === 'light' ? '\uD83C\uDF19' : '\u2600\uFE0F'}\r\n              </button>\r\n\r\n`,
  ''
);

fs.writeFileSync('src/app/components/Navbar.tsx', c, 'utf8');

const hasToggle = c.includes('toggleTheme') && c.includes('theme-toggle');
console.log(hasToggle ? 'Toggle buttons still present - check manually' : 'Toggle buttons removed ?');
