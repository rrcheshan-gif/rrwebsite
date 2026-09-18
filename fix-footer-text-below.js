const fs = require('fs');
const file = 'src/app/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldLogoHTML = `<div className="footer-logo-container">
                <div className="logo-box">
                  <img src="/images/logo.png" alt="RR Construction Logo" />
                </div>
                
              </div>`;

const newLogoHTML = `<div className="footer-logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
                <div className="logo-box">
                  <img src="/images/logo.png" alt="RR Construction Logo" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '5px' }}>
                  <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '1.4rem', color: '#fff', fontWeight: 'normal', lineHeight: 1 }}>Construction</span>
                  <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '0.85rem', color: 'var(--primary-red)', fontWeight: 'bold', letterSpacing: '1px', marginTop: '4px' }}>(Pvt) Ltd</span>
                </div>
              </div>`;

content = content.replace(oldLogoHTML, newLogoHTML);

fs.writeFileSync(file, content, 'utf8');
console.log('Added footer text below logo');
