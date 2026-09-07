const fs = require('fs');
let c = fs.readFileSync('src/app/components/Navbar.tsx', 'utf8');

// The current state at the bottom of nav:
// li.nav-extra-actions only has Contact Us
// nav-right-mobile only has mobile-menu-btn

// Replace nav-extra-actions to include toggle + contact
const oldExtra = `              <li className="nav-extra-actions">\r\n                <Link href="/contact" title="Contact Top Construction Contractors in Sri Lanka" className="nav-contact-btn" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>\r\n              </li>`;

const newExtra = `              <li className="nav-extra-actions">\r\n                <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">\r\n                  {theme === 'light' ? '\uD83C\uDF19' : '\u2600\uFE0F'}\r\n                </button>\r\n                <Link href="/contact" title="Contact Top Construction Contractors in Sri Lanka" className="nav-contact-btn" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>\r\n              </li>`;

c = c.replace(oldExtra, newExtra);

// Replace nav-right-mobile to include toggle before mobile menu btn
const oldMobile = `            <div className="nav-right-mobile flex items-center gap-3">\r\n              <button `;
const newMobile = `            <div className="nav-right-mobile flex items-center gap-3">\r\n              <button onClick={toggleTheme} className="theme-toggle mobile-only-toggle" aria-label="Toggle Dark Mode">\r\n                {theme === 'light' ? '\uD83C\uDF19' : '\u2600\uFE0F'}\r\n              </button>\r\n              <button `;

c = c.replace(oldMobile, newMobile);

fs.writeFileSync('src/app/components/Navbar.tsx', c, 'utf8');

const hasToggle = c.includes('theme-toggle');
const hasContact = c.includes('nav-contact-btn');
console.log('Toggle present:', hasToggle);
console.log('Contact present:', hasContact);
