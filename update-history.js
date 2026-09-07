const fs = require('fs');
let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

const newTimeline =       {/* Alternating Modern Timeline */}
      <section style={{ padding: isMobile ? '60px 10px' : '120px 0', background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
        
        {/* Background Decorative elements */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(229,57,53,0.05) 0%, rgba(248,250,252,0) 70%)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(15,23,42,0.05) 0%, rgba(248,250,252,0) 70%)', zIndex: 0 }}></div>

        <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontWeight: 900, marginBottom: '20px' }}>
              Our <span style={{ color: 'var(--primary-red)' }}>Milestones</span>
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>A legacy of engineering excellence built year by year.</p>
          </div>

          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Center Line for Desktop, Left Line for Mobile */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: isMobile ? '30px' : '50%', width: '2px', background: 'var(--border-soft)', transform: isMobile ? 'none' : 'translateX(-50%)' }}></div>

            {timelineEvents.map((e, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} style={{ 
                  display: 'flex', 
                  flexDirection: isMobile ? 'row' : (isEven ? 'row' : 'row-reverse'),
                  width: '100%', 
                  marginBottom: '80px', 
                  position: 'relative' 
                }}>
                  
                  {/* Timeline Dot */}
                  <div style={{ 
                    position: 'absolute', 
                    left: isMobile ? '30px' : '50%', 
                    top: '30px', 
                    transform: isMobile ? 'translateX(-50%)' : 'translate(-50%, -50%)', 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    background: 'white', 
                    border: '4px solid var(--primary-red)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    boxShadow: '0 0 0 10px rgba(229,57,53,0.1)', 
                    zIndex: 2 
                  }}>
                    {e.icon}
                  </div>

                  {/* Spacer for empty side (Desktop only) */}
                  {!isMobile && <div style={{ width: '50%', padding: '0 50px' }}></div>}
                  
                  {/* Content Card */}
                  <div style={{ 
                    width: isMobile ? '100%' : '50%', 
                    padding: isMobile ? '0 0 0 80px' : (isEven ? '0 50px 0 0' : '0 0 0 50px'),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMobile ? 'flex-start' : (isEven ? 'flex-end' : 'flex-start'),
                    textAlign: isMobile ? 'left' : (isEven ? 'right' : 'left')
                  }}>
                    
                    <div className="hover-lift" style={{ 
                      background: 'white', 
                      padding: '40px', 
                      borderRadius: '24px', 
                      boxShadow: '0 20px 40px rgba(0,0,0,0.06)', 
                      border: '1px solid rgba(0,0,0,0.03)',
                      position: 'relative',
                      overflow: 'hidden',
                      width: '100%',
                      textAlign: 'left' // Keep text inside card left-aligned/justified
                    }}>
                      
                      {/* Decorative Epoch Number inside card */}
                      <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '6rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'rgba(229,57,53,0.04)', zIndex: 0, pointerEvents: 'none', lineHeight: 1 }}>
                        {e.epoch === "Present" ? "NOW" : e.epoch}
                      </div>

                      <div style={{ display: 'inline-block', background: 'var(--primary-red)', color: 'white', padding: '8px 20px', borderRadius: '30px', fontSize: '1rem', fontWeight: 800, marginBottom: '20px', position: 'relative', zIndex: 1, boxShadow: '0 10px 20px rgba(229,57,53,0.3)' }}>
                        {e.epoch}
                      </div>

                      <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px', position: 'relative', zIndex: 1 }}>{e.title}</h3>
                      
                      <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: 1.8, position: 'relative', zIndex: 1, margin: 0, textAlign: 'justify' }}>
                        {e.desc}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
;
content = content.replace(/\{\/\* Ultra-Modern Left-Aligned Timeline \*\/\}[\s\S]*?<\/section>/, newTimeline.replace(/\$/g, ''));
fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
