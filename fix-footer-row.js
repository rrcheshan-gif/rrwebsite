const fs = require('fs');
const file = 'src/app/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldTextContainer = `<div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '5px' }}>
                  <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '1.4rem', color: '#fff', fontWeight: 'normal', lineHeight: 1 }}>Construction</span>
                  <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '0.85rem', color: 'var(--primary-red)', fontWeight: 'bold', letterSpacing: '1px', marginTop: '4px' }}>(Pvt) Ltd</span>
                </div>`;

const newTextContainer = `<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: '6px', paddingLeft: '5px' }}>
                  <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '1.4rem', color: '#fff', fontWeight: 'normal', lineHeight: 1 }}>Construction</span>
                  <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '0.9rem', color: 'var(--primary-red)', fontWeight: 'bold', letterSpacing: '1px' }}>(Pvt) Ltd</span>
                </div>`;

content = content.replace(oldTextContainer, newTextContainer);

fs.writeFileSync(file, content, 'utf8');
console.log('Changed footer text to row');
