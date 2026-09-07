const fs = require('fs');
const file = 'src/app/services/maritime-construction/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldBlock = `<div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                backgroundColor: 'var(--bg-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-light)'
              }}>
                [Maritime Image placeholder]
              </div>`;

const newBlock = `<img 
                src="/images/gandara/gandara-hero.jpg" 
                alt="Maritime Construction Works" 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />`;

content = content.replace(oldBlock, newBlock);

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced placeholder with image.');
