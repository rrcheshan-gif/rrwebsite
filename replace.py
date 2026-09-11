import re

with open('src/app/about/history/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_card_jsx = '''<div key={i} className="hover-lift" style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row', 
                background: 'var(--white)', 
                borderRadius: '16px', 
                border: '1px solid var(--border-soft)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                minHeight: isMobile ? 'auto' : '380px'
              }}>
                
                {/* Left: Image with Overlay Year */}
                <div style={{ 
                  width: isMobile ? '100%' : '50%', 
                  position: 'relative',
                  minHeight: isMobile ? '300px' : 'auto'
                }}>
                  <img
                    src={encodeURI(e.image)}
                    alt={e.imageAlt}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block',
                      position: 'absolute',
                      top: 0, left: 0,
                      transition: 'transform 0.5s ease'
                    }}
                    onError={(ev) => { (ev.target as HTMLImageElement).style.display = 'none'; }}
                    className="img-hover-zoom"
                  />
                  {/* Overlay Badge for Year */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '30px', 
                    left: '30px', 
                    background: 'rgba(255,255,255,0.95)', 
                    backdropFilter: 'blur(10px)',
                    padding: '12px 24px', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    zIndex: 2
                  }}>
                    <div style={{ background: 'rgba(229,57,53,0.1)', padding: '10px', borderRadius: '50%', color: 'var(--primary-red)', display: 'flex' }}>
                      {e.icon}
                    </div>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--text-dark)', margin: 0, lineHeight: 1 }}>
                      {e.epoch}
                    </h2>
                  </div>
                </div>

                {/* Right: Content Area */}
                <div style={{ 
                  width: isMobile ? '100%' : '50%', 
                  padding: isMobile ? '40px 20px' : '50px 60px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  zIndex: 1
                }}>
                  <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--primary-red)', marginBottom: '20px' }}>
                    {e.title}
                  </h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
                    {e.desc}
                  </p>
                </div>

              </div>'''

# Find the start of the card map block
start_idx = content.find('<div key={i} className="hover-lift"')
# Find the end of the card block
end_idx = content.find('            ))}     ', start_idx)
if end_idx == -1:
    end_idx = content.find('            ))}', start_idx)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_card_jsx + '\n' + content[end_idx:]
    with open('src/app/about/history/page.tsx', 'w', encoding='utf-8-sig') as f:
        f.write(content)
    print("Successfully replaced card JSX.")
else:
    print("Could not find the bounds.")
