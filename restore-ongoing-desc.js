const fs = require('fs');
const file = 'src/app/projects/ongoing/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Change Title
content = content.replace(
  'Ongoing <span style={{ color: \'var(--primary-red)\' }}>Categories</span>',
  'Ongoing <span style={{ color: \'var(--primary-red)\' }}>Projects</span>'
);

// 2. Remove the short sentence
content = content.replace(
  '<p style={{ maxWidth: \'800px\', margin: \'0 auto\', fontSize: \'1.1rem\', color: \'#cbd5e1\', lineHeight: 1.8 }}>\n            Explore our diverse and expansive portfolio of active large-scale infrastructure projects across all critical engineering sectors.\n          </p>',
  ''
);

// 3. Add the old paragraph back right before the Category Grid Section
const paragraphBlock = `
      {/* Intro Description */}
      <section style={{ padding: '0 20px 40px', textAlign: 'center', marginTop: '-100px', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{
             background: 'var(--white)',
             padding: '40px 50px',
             borderRadius: '24px',
             boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
             border: '1px solid var(--border-soft)',
             position: 'relative'
          }}>
             <div style={{ width: '60px', height: '4px', background: 'var(--primary-red)', margin: '0 auto 30px', borderRadius: '2px' }}></div>
             
             <p style={{ 
               color: 'var(--text-dark)', 
               fontSize: '1.15rem', 
               lineHeight: 2, 
               textAlign: 'justify',
               marginBottom: '20px'
             }}>
               <strong>RR Construction</strong> is currently executing a diverse and expansive portfolio of large-scale infrastructure projects. Our ongoing commitments span across all critical engineering sectors, including national road networks, complex bridges, comprehensive water supply and irrigation systems, major maritime developments, multi-storey buildings, railway infrastructure, disaster management and landslide mitigation, as well as specialized overseas construction projects.
             </p>

             <p style={{ 
               color: 'var(--text-light)', 
               fontSize: '1.15rem', 
               lineHeight: 2, 
               textAlign: 'justify',
               margin: 0
             }}>
               Equipped with our expansive proprietary machinery fleet and unmatched technical expertise, we are continuously driving infrastructure development forward. Our dedicated engineering and project management teams ensure that every ongoing site progresses seamlessly, consistently delivering high-quality results while adhering to the strictest international standards for occupational health, safety, and environmental sustainability.
             </p>
          </div>
        </div>
      </section>

`;

content = content.replace(
  '{/* Category Grid Section */}',
  paragraphBlock + '      {/* Category Grid Section */}'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Restored old paragraph and changed title');
