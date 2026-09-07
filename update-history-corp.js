const fs = require('fs');
let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

const newTimeline =       {/* Professional Corporate Timeline */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>
              Our History & <span style={{ color: 'var(--primary-red)' }}>Milestones</span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary-red)', margin: '0 auto 20px' }}></div>
            <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
              A legacy of engineering excellence, built on decades of trust, capability expansion, and successful project delivery.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {timelineEvents.map((e, i) => (
              <div key={i} className="hover-lift" style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row', 
                background: 'var(--white)', 
                borderRadius: '12px', 
                border: '1px solid var(--border-soft)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                overflow: 'hidden'
              }}>
                
                {/* Left: Year & Icon (Distinct Corporate Block) */}
                <div style={{ 
                  width: isMobile ? '100%' : '260px', 
                  background: 'var(--bg-base)', 
                  padding: '40px 30px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: isMobile ? 'flex-start' : 'center',
                  borderRight: isMobile ? 'none' : '1px solid var(--border-soft)',
                  borderBottom: isMobile ? '1px solid var(--border-soft)' : 'none'
                }}>
                  <div style={{ background: 'rgba(229,57,53,0.1)', padding: '16px', borderRadius: '50%', marginBottom: '20px', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {e.icon}
                  </div>
                  <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--text-dark)', margin: 0, lineHeight: 1 }}>
                    {e.epoch}
                  </h2>
                </div>

                {/* Right: Content Area */}
                <div style={{ flex: 1, padding: isMobile ? '30px 20px' : '50px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--primary-red)', marginBottom: '15px' }}>
                    {e.title}
                  </h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
                    {e.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>;

content = content.replace(/\{\/\* Alternating Modern Timeline \*\/\}[\s\S]*?<\/section>/, newTimeline.replace(/\$/g, ''));
fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
