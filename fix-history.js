const fs = require('fs');

let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

const regex = /\/\* Modern Asymmetric Timeline \*\/[\s\S]*?<\/section>/;

const newComponent = \{/* Staircase Ribbon Timeline */}
        <section style={{ padding: isMobile ? "40px 0" : "80px 0", position: 'relative', background: '#f8fafc', overflow: 'hidden' }}>
          <div className="container" style={{ maxWidth: "1200px", position: "relative" }}>
            
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontFamily: "var(--font-heading)", color: "var(--text-dark)", fontWeight: 800 }}>Our Journey</h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "600px", margin: "10px auto 0" }}>Tracing our path from early foundations to becoming a heavy civil engineering powerhouse.</p>
            </div>

            <div style={{ 
               display: 'flex', 
               width: '100%', 
               paddingTop: '280px', 
               paddingBottom: '40px',
               overflowX: 'auto',
               gap: '30px',
               paddingLeft: '20px',
               paddingRight: '20px',
               scrollbarWidth: 'none', /* Firefox */
               msOverflowStyle: 'none'  /* IE/Edge */
            }} className="no-scrollbar">
              {timelineEvents.map((e, i) => {
                 // Green to Blue gradient palette matching the requested image aesthetic
                 const colors = ['#8bc34a', '#4caf50', '#009688', '#0288d1', '#3f51b5'];
                 const color = colors[i];
                 
                 return (
                   <div key={i} style={{ 
                      flex: 1, 
                      minWidth: '240px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      transform: \\\	ranslateY(-\\\px)\\\,
                      position: 'relative'
                   }}>
                      
                      {/* Flag & Epoch (floating above the step) */}
                      <div style={{ 
                         display: 'flex', 
                         flexDirection: 'column', 
                         alignItems: 'center', 
                         marginBottom: '15px',
                         position: 'relative',
                         zIndex: 2
                      }}>
                         <div style={{ 
                            background: color, 
                            padding: '12px', 
                            borderRadius: '12px', 
                            borderBottomLeftRadius: '2px', // Flag shape hint
                            color: 'white', 
                            marginBottom: '12px', 
                            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                         }}>
                            {e.icon}
                         </div>
                         <span style={{ fontWeight: '900', color: color, fontSize: '1.2rem', letterSpacing: '0.5px' }}>{e.epoch}</span>
                      </div>
            
                      {/* The Flat Step Ribbon */}
                      <div style={{ 
                         width: '100%', 
                         height: '40px', 
                         backgroundColor: color, 
                         position: 'relative',
                         zIndex: 1,
                         boxShadow: 'inset 0 -5px 10px rgba(0,0,0,0.1)',
                         borderRadius: i === 0 ? '6px 0 0 6px' : (i === timelineEvents.length - 1 ? '0 6px 6px 0' : '0')
                      }}>
                         {/* The slanted connector to the next step */}
                         {i < timelineEvents.length - 1 && (
                            <svg 
                               style={{ position: 'absolute', right: '-30px', top: '-60px', width: '30px', height: '100px', zIndex: 0 }}
                               preserveAspectRatio="none"
                            >
                               {/* Points connect perfectly from right edge of this block to left edge of the next */}
                               <polygon points="0,60 30,0 30,40 0,100" fill={color} style={{ filter: 'brightness(0.85)' }} />
                            </svg>
                         )}
                      </div>
            
                      {/* Text Content */}
                      <div style={{ marginTop: '25px', padding: '0 10px', textAlign: 'center' }}>
                         <h4 style={{ color: 'var(--text-dark)', fontWeight: '800', marginBottom: '12px', fontSize: '1.15rem' }}>{e.title}</h4>
                         <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'justify' }}>{e.desc}</p>
                      </div>
                   </div>
                 )
              })}
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: \\\
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          \\\}} />
        </section>\;

content = content.replace(regex, newBlock);
fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
console.log('Successfully applied new staircase ribbon timeline design.');
