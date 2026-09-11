const fs = require('fs');

let c = fs.readFileSync('src/app/page.tsx', 'utf8');

c = c.replace(
  /<img className="img-polished"[\s\S]*?onError=\{\(e\).*?\/>/,
  `<img className="img-polished" 
                    src={slide.img} 
                    alt={slide.tag} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: 'center', 
                      opacity: 0.8, 
                      filter: 'contrast(1.1) saturate(1.05)',
                      transform: index === currentSlide ? 'scale(1.12)' : 'scale(1)',
                      transition: index === currentSlide ? 'transform 12s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
                      willChange: 'transform'
                    }} 
                    onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }} 
                  />`
);

fs.writeFileSync('src/app/page.tsx', c, 'utf8');
console.log("Successfully replaced image block with regex.");
