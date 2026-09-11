const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const target = `<img className="img-polished" 
                    src={slide.img} 
                    alt={slide.tag} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.8, filter: 'contrast(1.1) saturate(1.05)' }} 
                    onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }} 
                  />`;

const replacement = `<img className="img-polished" 
                    src={slide.img} 
                    alt={slide.tag} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: 'center', 
                      opacity: 0.8, 
                      filter: 'contrast(1.1) saturate(1.05)',
                      transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
                      transition: index === currentSlide ? 'transform 10s ease-out' : 'none',
                      willChange: 'transform'
                    }} 
                    onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }} 
                  />`;

if (c.indexOf(target) !== -1) {
  c = c.replace(target, replacement);
  fs.writeFileSync('src/app/page.tsx', c, 'utf8');
  console.log("Replaced perfectly");
} else {
  console.log("Still could not find the exact string. Let's find index of '<img className=\"img-polished\"' and '/>'");
  const startIdx = c.indexOf('<img className="img-polished"');
  if (startIdx !== -1) {
    const endStr = '/>';
    const endIdx = c.indexOf(endStr, startIdx);
    if (endIdx !== -1) {
      const actualTarget = c.substring(startIdx, endIdx + endStr.length);
      console.log("Found substring:\n" + actualTarget);
      c = c.replace(actualTarget, replacement);
      fs.writeFileSync('src/app/page.tsx', c, 'utf8');
      console.log("Replaced using dynamic substring");
    }
  }
}
