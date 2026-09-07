const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldVideo = `<video 
                    src={slide.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9 }} 
                  />`;
                  
const newVideo = `<video 
                    src={slide.video} 
                    poster={slide.img}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9 }} 
                  />`;

content = content.replace(oldVideo, newVideo);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log("Added poster to video");
