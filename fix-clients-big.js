const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div \s*style=\{\{\s*display: "flex",\s*flexWrap: "wrap",\s*justifyContent: "center",\s*alignItems: "center",\s*gap: "10px 14px",\s*width: "100%",\s*maxWidth: "1100px"\s*\}\}\s*>\s*\{\[\s*\{\s*name:\s*'ROAD DEVELOPMENT AUTHORITY'[\s\S]*?<\/span>\s*<\/div>\s*\)\)\}\s*<\/div>/;

const newBlock = \<div 
                style={{ 
                  display: "flex", 
                  flexWrap: "wrap", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  gap: "20px", 
                  width: "100%", 
                  maxWidth: "1100px" 
                }}
              >
                {[
                  { name: 'ROAD DEVELOPMENT AUTHORITY', logo: '/images/clients/rda.png' },
                  { name: 'NATIONAL WATER BOARD', logo: '/images/clients/nwsdb.png' },
                  { name: 'U.D.A. SRI LANKA', logo: '/images/clients/uda.png' },
                  { name: 'MINISTRY OF IRRIGATION', logo: '/images/clients/irrigation.png' },
                  { name: 'IRCON INTERNATIONAL', logo: '/images/clients/ircon.png' }
                ].map((client, idx) => (
                  <div 
                    key={idx} 
                    className='glass-panel hover-lift' 
                    style={{ 
                      padding: '15px 25px', 
                      borderRadius: '16px', 
                      border: '1px solid var(--border-soft)', 
                      background: 'white',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '18px',
                      width: 'min(100%, 340px)'
                    }}
                  >
                    <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <img src={client.logo} alt={client.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-dark)', letterSpacing: '0.5px', lineHeight: 1.3 }}>
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>\;

content = content.replace(regex, newBlock);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated clients to big cards');
