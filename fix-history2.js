const fs = require('fs');

let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

const regex = /\/\* Modern Asymmetric Timeline \*\/[\s\S]*?<\/section>/;

const newBlock = "{/* Staircase Ribbon Timeline */}\n" +
"        <section style={{ padding: isMobile ? '40px 0' : '80px 0', position: 'relative', background: '#f8fafc', overflow: 'hidden' }}>\n" +
"          <div className='container' style={{ maxWidth: '1200px', position: 'relative' }}>\n" +
"            \n" +
"            <div style={{ textAlign: 'center', marginBottom: '40px' }}>\n" +
"              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontWeight: 800 }}>Our Journey</h2>\n" +
"              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '10px auto 0' }}>Tracing our path from early foundations to becoming a heavy civil engineering powerhouse.</p>\n" +
"            </div>\n" +
"\n" +
"            <div style={{ \n" +
"               display: 'flex', \n" +
"               width: '100%', \n" +
"               paddingTop: '280px', \n" +
"               paddingBottom: '40px',\n" +
"               overflowX: 'auto',\n" +
"               gap: '30px',\n" +
"               paddingLeft: '20px',\n" +
"               paddingRight: '20px',\n" +
"               scrollbarWidth: 'none', /* Firefox */\n" +
"               msOverflowStyle: 'none'  /* IE/Edge */\n" +
"            }} className='no-scrollbar'>\n" +
"              {timelineEvents.map((e, i) => {\n" +
"                 // Green to Blue gradient palette matching the requested image aesthetic\n" +
"                 const colors = ['#8bc34a', '#4caf50', '#009688', '#0288d1', '#3f51b5'];\n" +
"                 const color = colors[i];\n" +
"                 \n" +
"                 return (\n" +
"                   <div key={i} style={{ \n" +
"                      flex: 1, \n" +
"                      minWidth: '240px', \n" +
"                      display: 'flex', \n" +
"                      flexDirection: 'column', \n" +
"                      transform: \	ranslateY(-\px)\,\n" +
"                      position: 'relative'\n" +
"                   }}>\n" +
"                      \n" +
"                      {/* Flag & Epoch (floating above the step) */}\n" +
"                      <div style={{ \n" +
"                         display: 'flex', \n" +
"                         flexDirection: 'column', \n" +
"                         alignItems: 'center', \n" +
"                         marginBottom: '15px',\n" +
"                         position: 'relative',\n" +
"                         zIndex: 2\n" +
"                      }}>\n" +
"                         <div style={{ \n" +
"                            background: color, \n" +
"                            padding: '12px', \n" +
"                            borderRadius: '12px', \n" +
"                            borderBottomLeftRadius: '2px', // Flag shape hint\n" +
"                            color: 'white', \n" +
"                            marginBottom: '12px', \n" +
"                            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',\n" +
"                            display: 'flex',\n" +
"                            alignItems: 'center',\n" +
"                            justifyContent: 'center'\n" +
"                         }}>\n" +
"                            <Flag size={24} color='white' />\n" +
"                         </div>\n" +
"                         <span style={{ fontWeight: '900', color: color, fontSize: '1.2rem', letterSpacing: '0.5px' }}>{e.epoch}</span>\n" +
"                      </div>\n" +
"            \n" +
"                      {/* The Flat Step Ribbon */}\n" +
"                      <div style={{ \n" +
"                         width: '100%', \n" +
"                         height: '40px', \n" +
"                         backgroundColor: color, \n" +
"                         position: 'relative',\n" +
"                         zIndex: 1,\n" +
"                         boxShadow: 'inset 0 -5px 10px rgba(0,0,0,0.1)',\n" +
"                         borderRadius: i === 0 ? '6px 0 0 6px' : (i === timelineEvents.length - 1 ? '0 6px 6px 0' : '0')\n" +
"                      }}>\n" +
"                         {/* The slanted connector to the next step */}\n" +
"                         {i < timelineEvents.length - 1 && (\n" +
"                            <svg \n" +
"                               style={{ position: 'absolute', right: '-30px', top: '-60px', width: '30px', height: '100px', zIndex: 0 }}\n" +
"                               preserveAspectRatio='none'\n" +
"                            >\n" +
"                               {/* Points connect perfectly from right edge of this block to left edge of the next */}\n" +
"                               <polygon points='0,60 30,0 30,40 0,100' fill={color} style={{ filter: 'brightness(0.85)' }} />\n" +
"                            </svg>\n" +
"                         )}\n" +
"                      </div>\n" +
"            \n" +
"                      {/* Text Content */}\n" +
"                      <div style={{ marginTop: '25px', padding: '0 10px', textAlign: 'center' }}>\n" +
"                         <h4 style={{ color: 'var(--text-dark)', fontWeight: '800', marginBottom: '12px', fontSize: '1.15rem' }}>{e.title}</h4>\n" +
"                         <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'justify' }}>{e.desc}</p>\n" +
"                      </div>\n" +
"                   </div>\n" +
"                 )\n" +
"              })}\n" +
"            </div>\n" +
"          </div>\n" +
"          \n" +
"          <style dangerouslySetInnerHTML={{__html: \\n" +
"            .no-scrollbar::-webkit-scrollbar {\n" +
"              display: none;\n" +
"            }\n" +
"          \}} />\n" +
"        </section>";

content = content.replace(regex, newBlock);
fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
console.log('Successfully applied new staircase ribbon timeline design.');
