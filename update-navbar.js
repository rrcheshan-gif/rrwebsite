const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove 'Quarries & Aggregates' from 'Technology & Services' dropdown
content = content.replace(/<li><Link href="\/facilities" onClick=\{\(\) => setMobileMenuOpen\(false\)\}>Quarries &amp; Aggregates<\/Link><\/li>\n/g, '');

// 2. Add 'Resources' dropdown right before 'Sustainability'
const resourcesDropdown = `                <li className={\`dropdown \${activeDropdown === 'resources' ? 'open' : ''}\`}>
                  <div className="dropdown-header">
                    <Link href="/resources" title="Construction Resources Sri Lanka" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
                    <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('resources', e)} aria-label="Toggle Resources Submenu">
                      <ChevronDown size={14} />
                    </button>
                  </div>
                  <ul className="dropdown-menu">
                    <li><Link href="/resources/asphalt" onClick={() => setMobileMenuOpen(false)}>Asphalt</Link></li>
                    <li><Link href="/resources/crusher" onClick={() => setMobileMenuOpen(false)}>Crusher</Link></li>
                    <li><Link href="/resources/sand" onClick={() => setMobileMenuOpen(false)}>Sand</Link></li>
                    <li><Link href="/resources/concrete" onClick={() => setMobileMenuOpen(false)}>Concrete</Link></li>
                  </ul>
                </li>
                
                <li className={\`dropdown \${activeDropdown === 'sustainability' ? 'open' : ''}\`}>`;

content = content.replace(/<li className=\{\`dropdown \$\{activeDropdown === 'sustainability' \? 'open' : ''\}\`\}>/g, resourcesDropdown);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully added Resources to Navbar');
