const fs = require('fs');

let c = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldBlock = `<img className="img-polished" 
                    src={slide.img} 
                    alt={slide.tag} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.8, filter: 'contrast(1.1) saturate(1.05)' }} 
                    onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }} 
                  />`;

const newBlock = `<img className="img-polished" 
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
                      transition: index === currentSlide ? 'transform 12s ease-out' : 'none',
                      willChange: 'transform'
                    }} 
                    onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }} 
                  />`;

if (c.includes(oldBlock)) {
    c = c.replace(oldBlock, newBlock);
    fs.writeFileSync('src/app/page.tsx', c, 'utf8');
    console.log("Successfully replaced image block.");
} else {
    console.log("Could not find exact block to replace.");
}
