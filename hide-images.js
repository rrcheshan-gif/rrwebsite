const fs = require('fs');

function fixPage(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  // We need to wrap the div in a condition.
  // The div starts with: <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "var(--bg-base)" }}>
  // We should change it to:
  // {(() => {
  //   const imgPath = project.heroImage || project.images?.[0];
  //   if (!imgPath) return null;
  //   return (
  //     <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "var(--bg-base)" }}>
  //       ...
  //     </div>
  //   );
  // })()}

  const oldBlock = \                <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "var(--bg-base)" }}>
                  {(() => {
                    const imgPath = project.heroImage || project.images?.[0];
                    if (!imgPath) return null;
                    const imgSrc = imgPath.startsWith('/') ? imgPath : \\\/\\\\\\;
                    return (
                      <img 
                        src={imgSrc} 
                        alt={\\\\\\ - RR Construction Sri Lanka\\\} 
                        className="img-polished img-hover-zoom" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    );
                  })()}
                  <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "6px", flexWrap: "wrap", zIndex: 2 }}>
                    <span style={{ padding: '4px 10px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid rgba(255,255,255,0.2)' }}>{project.category}</span>
                    <span style={{ padding: '4px 10px', background: 'rgba(217, 119, 6, 0.85)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.3px', border: '1px solid rgba(255,255,255,0.25)' }}>Ongoing</span>
                  </div>
                </div>\;

  const newBlock = \                {(() => {
                  const imgPath = project.heroImage || project.images?.[0] || project.galleryImages?.[0];
                  if (!imgPath) return null;
                  const imgSrc = imgPath.startsWith('/') ? imgPath : \\\/\\\\\\;
                  return (
                    <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "var(--bg-base)" }}>
                      <img 
                        src={imgSrc} 
                        alt={\\\\\\ - RR Construction Sri Lanka\\\} 
                        className="img-polished img-hover-zoom" 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "6px", flexWrap: "wrap", zIndex: 2 }}>
                        <span style={{ padding: '4px 10px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid rgba(255,255,255,0.2)' }}>{project.category}</span>
                        <span style={{ padding: '4px 10px', background: 'rgba(217, 119, 6, 0.85)', backdropFilter: 'blur(8px)', color: 'white', borderRadius: "30px", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.3px', border: '1px solid rgba(255,255,255,0.25)' }}>Ongoing</span>
                      </div>
                    </div>
                  );
                })()}\;

  if (content.includes('height: "220px"')) {
    // Note: the exact indentation might vary, so we can use a regex.
    const regex = /<div style={{ position: "relative", height: "220px"[\s\S]*?<\/div>[\s]*<\/div>/;
    content = content.replace(regex, newBlock);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
}

fixPage('src/app/projects/ongoing/page.tsx');
