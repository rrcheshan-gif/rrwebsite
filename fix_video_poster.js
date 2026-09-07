const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the video tag with one that includes a poster
const oldVideoTag = `<video 
                  src={slide.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />`;
                
const newVideoTag = `<video 
                  src={slide.video} 
                  poster={slide.img}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />`;

content = content.replace(oldVideoTag, newVideoTag);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log("Updated video tag with poster");
