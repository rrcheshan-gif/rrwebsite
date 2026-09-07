const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The video element is currently:
// <video 
//   src={slide.video} 
//   autoPlay 
//   ...

content = content.replace(/<video[\s\S]*?src=\{slide\.video\}[\s\S]*?autoPlay/g, `<video 
                  src={slide.video}
                  poster={slide.img} 
                  autoPlay`);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log("Added poster to video tag");
