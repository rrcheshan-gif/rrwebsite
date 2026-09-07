const fs = require('fs');

let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

const regex = /\{\/\* Staircase Ribbon Timeline \*\/\}[\s\S]*?<\/section>/;

const newBlock = "{/* Modern Vertical Timeline */}\n" +
"        <section style={{ padding: isMobile ? '60px 15px' : '100px 0', background: '#f8fafc', position: 'relative' }}>\n" +
"          <div className='container' style={{ maxWidth: '1000px', position: 'relative' }}>\n" +
"            <div style={{ textAlign: 'center', marginBottom: '80px' }}>\n" +
"              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-dark)', fontWeight: 800 }}>Our <span style={{color: 'var(--primary-red)'}}>History</span></h2>\n" +
"              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '600px', margin: '15px auto 0', lineHeight: 1.6 }}>A legacy of engineering excellence, continuous growth, and nation-building.</p>\n" +
"            </div>\n" +
"\n" +
"            <div style={{ position: 'relative' }}>\n" +
"              {/* Central Connecting Line */}\n" +
"              <div style={{ \n" +
"                 position: 'absolute', \n" +
"                 left: isMobile ? '24px' : '50%', \n" +
"                 top: 0, \n" +
"                 bottom: 0, \n" +
"                 width: '2px', \n" +
"                 background: 'linear-gradient(to bottom, transparent, var(--border-soft) 5%, var(--border-soft) 95%, transparent)',\n" +
"                 transform: isMobile ? 'none' : 'translateX(-50%)',\n" +
"                 zIndex: 0\n" +
"              }}></div>\n" +
"\n" +
"              {timelineEvents.map((e, i) => {\n" +
"                 const isLeft = i % 2 === 0 && !isMobile;\n" +
"                 return (\n" +
"                    <div key={i} style={{ \n" +
"                       display: 'flex', \n" +
"                       justifyContent: isMobile ? 'flex-start' : (isLeft ? 'flex-start' : 'flex-end'),\n" +
"                       marginBottom: '50px',\n" +
"                       position: 'relative',\n" +
"                       width: '100%'\n" +
"                    }}>\n" +
"                       \n" +
"                       {/* Timeline Dot */}\n" +
"                       <div style={{\n" +
"                          position: 'absolute',\n" +
"                          left: isMobile ? '24px' : '50%',\n" +
"                          top: '40px',\n" +
"                          transform: 'translate(-50%, -50%)',\n" +
"                          width: '20px',\n" +
"                          height: '20px',\n" +
"                          borderRadius: '50%',\n" +
"                          background: 'var(--primary-red)',\n" +
"                          border: '4px solid #f8fafc',\n" +
"                          boxShadow: '0 0 0 6px rgba(229,57,53,0.1)',\n" +
"                          zIndex: 2\n" +
"                       }}></div>\n" +
"\n" +
"                       {/* Event Card */}\n" +
"                       <div className='glass-panel hover-lift' style={{ \n" +
"                          width: isMobile ? 'calc(100% - 60px)' : '45%', \n" +
"                          marginLeft: isMobile ? '60px' : 0,\n" +
"                          padding: '30px', \n" +
"                          background: 'white', \n" +
"                          borderRadius: '16px',\n" +
"                          border: '1px solid var(--border-soft)',\n" +
"                          boxShadow: '0 10px 40px rgba(0,0,0,0.03)',\n" +
"                          position: 'relative',\n" +
"                          zIndex: 1\n" +
"                       }}>\n" +
"                          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>\n" +
"                             <div style={{ \n" +
"                                width: '55px', height: '55px', \n" +
"                                borderRadius: '12px', \n" +
"                                background: 'var(--bg-light)', \n" +
"                                color: 'var(--primary-red)',\n" +
"                                display: 'flex', alignItems: 'center', justifyContent: 'center',\n" +
"                                flexShrink: 0\n" +
"                             }}>\n" +
"                                {e.icon}\n" +
"                             </div>\n" +
"                             <div>\n" +
"                                <span style={{ display: 'block', color: 'var(--primary-red)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '1px', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' }}>{e.epoch}</span>\n" +
"                                <h4 style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.2rem', margin: '4px 0 0', fontFamily: 'var(--font-heading)' }}>{e.title}</h4>\n" +
"                             </div>\n" +
"                          </div>\n" +
"                          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.7, textAlign: 'justify', margin: 0 }}>\n" +
"                             {e.desc}\n" +
"                          </p>\n" +
"                       </div>\n" +
"                    </div>\n" +
"                 );\n" +
"              })}\n" +
"            </div>\n" +
"          </div>\n" +
"        </section>";

content = content.replace(regex, newBlock);
fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
console.log('Successfully applied modern corporate timeline design.');
