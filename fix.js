const fs = require('fs');

let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

// I'll rewrite the entire map block
const blockStart = "          <div style={{ position: 'relative' }}>";
const blockEnd = "      </section>";

const newBlock = \          <div style={{ position: 'relative' }}>
            {timelineEvents.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: '30px', marginBottom: '80px', position: 'relative' }}>
                <div style={{ width: isMobile ? '50px' : '105px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                   {i !== timelineEvents.length - 1 && (
                     <div style={{ position: 'absolute', top: '60px', bottom: '-80px', width: '2px', background: 'linear-gradient(180deg, var(--primary-red) 0%, rgba(229,57,53,0.1) 100%)' }}></div>
                   )}
                   <div style={{ width: isMobile ? '40px' : '60px', height: isMobile ? '40px' : '60px', borderRadius: '50%', background: 'white', border: '2px solid var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(229,57,53,0.2)', zIndex: 2, position: 'relative' }}>
                     {e.icon}
                   </div>
                </div>
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                   <div className="hover-lift" style={{ background: 'white', padding: isMobile ? '20px' : '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.02)' }}>
                     <div style={{ display: 'inline-block', background: 'rgba(229,57,53,0.1)', color: 'var(--primary-red)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 800, marginBottom: '15px' }}>
                       {e.epoch}
                     </div>
                     <h3 style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '15px', position: 'relative', zIndex: 2 }}>{e.title}</h3>
                     <div style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.8, position: 'relative', zIndex: 2 }}>
                       {e.desc}
                     </div>
                     <div style={{ position: 'absolute', bottom: '-25px', right: '-20px', fontSize: 'clamp(8rem, 15vw, 11rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'rgba(229,57,53,0.03)', zIndex: 1, pointerEvents: 'none', lineHeight: 1 }}>
                       {e.epoch==="Present" ? "NOW" : e.epoch}
                     </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>\;

const s = content.indexOf(blockStart);
const e = content.indexOf(blockEnd, s) + blockEnd.length;

if (s >= 0 && e > s) {
   content = content.substring(0, s) + newBlock + content.substring(e);
   fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
   console.log("Success");
} else {
   console.log("Could not find blocks");
}
