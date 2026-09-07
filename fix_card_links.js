const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The rendering currently is:
// <Link key={svc.slug} href={svc.cta} className="svc-card">
//   ...
//   {/* Arrow CTA */}
//   <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--primary-red)', fontWeight: 700, fontSize: '0.88rem', marginTop: 'auto' }}>
//     Learn more
//     ...
//   </div>
// </Link>

// Let's replace the <Link key={svc.slug} href={svc.cta} className="svc-card"> with a conditional wrapper
// Since it's a bit complex, let's just make it a <div className="svc-card"> for all, but then handle navigation manually?
// Or we can just use React.createElement or conditionally use Link vs div.
// A common pattern in React is:
// const CardWrapper = svc.cta.startsWith('/services/') ? Link : 'div';
// then <CardWrapper href={svc.cta.startsWith('/services/') ? svc.cta : undefined} ...>

// But it's easier to just do:
const newRender = `
            {SERVICES.map((svc) => {
              const isLink = svc.cta.startsWith('/services/');
              
              const cardContent = (
                <>
                  {svc.image && (
                    <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                      <img src={svc.image} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} className="svc-img" 
                        onError={e => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                          (e.currentTarget as HTMLImageElement).parentElement!.style.display = 'none';
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
                <Link key={svc.slug} href={svc.cta} className="svc-card">
                  {cardContent}
                </Link>
              ) : (
                <div key={svc.slug} className="svc-card">
                  {cardContent}
                </div>
              );
            })}
`;

// we need to replace the whole {SERVICES.map((svc) => ( ... ))} block.
const mapRegex = /\{SERVICES\.map\(\(svc\) => \([\s\S]*?<\/Link>\n\s*\)\)\}/;
if (content.match(mapRegex)) {
    content = content.replace(mapRegex, newRender.trim());
}

fs.writeFileSync(file, content, 'utf8');
console.log('Updated service cards render logic.');
