const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The block we want to replace starts with:
// {SERVICES.map((svc, idx) => (
// and ends with:
// </Link>
// ))}
// The safest way is to replace the whole block by index.

const startStr = '{SERVICES.map((svc, idx) => (';
const endStr = '</Link>\n            ))}';

const startIndex = content.indexOf(startStr);

// Find the position of the `))} ` after the Link
let endIndex = content.indexOf('))}');
while (endIndex !== -1 && endIndex < startIndex) {
    endIndex = content.indexOf('))}', endIndex + 1);
}

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex + 3);
    
    const newCode = `{SERVICES.map((svc, idx) => {
              const isLink = svc.cta.startsWith('/services/');
              const cardContent = (
                <>
                  {svc.image && (
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={encodeURI(svc.image)}
                        alt={svc.title}
                        className="svc-card-img"
                        onError={(e: any) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.style.display = 'none';
                        }}
                      />
                      <div style={{ position: 'absolute', top: '14px', left: '14px', background: 'var(--primary-red)', color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>
                        {svc.num}
                      </div>
                    </div>
                  )}

                  <div className="svc-card-body">
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-red)',  letterSpacing: '1.5px', marginBottom: '8px' }}>{svc.subtitle}</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.3rem' : '1.45rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>{svc.title}</h3>
                    <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.93rem', margin: '0 0 20px', flex: 1 }}>{svc.desc}</p>

                    {isLink && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--primary-red)', fontWeight: 700, fontSize: '0.88rem', marginTop: 'auto' }}>
                        Learn more
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </>
              );

              return isLink ? (
                <Link key={svc.slug} href={svc.cta} className="svc-card" style={{ animationDelay: \`\${(idx % 3) * 80}ms\` }}>
                  {cardContent}
                </Link>
              ) : (
                <div key={svc.slug} className="svc-card" style={{ animationDelay: \`\${(idx % 3) * 80}ms\` }}>
                  {cardContent}
                </div>
              );
            })}`;
            
    content = before + newCode + after;
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully replaced map logic using indexOf.');
} else {
    console.log('Could not find markers.');
}
