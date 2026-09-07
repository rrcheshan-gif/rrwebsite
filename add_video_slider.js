const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add video property to Maritime slide
const maritimeSlideRegex = /(img: '\/images\/home\/slider-maritime-gandara\.jpeg',\s*duration: 8000,\s*tag: '02 \/ MARITIME & HARBOUR CONSTRUCTION')/;
if (content.match(maritimeSlideRegex)) {
    content = content.replace(maritimeSlideRegex, "$1,\n      video: '/VIDEOS/GFH.mp4'");
}

// 2. Update rendering logic
const oldImgRender = `<img className="img-polished" 
                src={slide.img} 
                alt={slide.tag} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.8, filter: 'contrast(1.1) saturate(1.05)' }} 
                onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }} 
              />`;

const newMediaRender = `
              {slide.video ? (
                <video 
                  src={slide.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9 }} 
                />
              ) : (
                <img className="img-polished" 
                  src={slide.img} 
                  alt={slide.tag} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.8, filter: 'contrast(1.1) saturate(1.05)' }} 
                  onError={(e) => { if (slide.fallback) (e.target as HTMLImageElement).src = slide.fallback; }} 
                />
              )}
`;

// Note: the exact formatting of oldImgRender might be slightly off due to line breaks, so let's use a regex replace for the whole img tag block.
const imgRegex = /<img className="img-polished"[\s\S]*?\/>/;
if (content.match(imgRegex)) {
    content = content.replace(imgRegex, newMediaRender.trim());
}

fs.writeFileSync(file, content, 'utf8');
console.log('Updated page.tsx with video slider support.');
