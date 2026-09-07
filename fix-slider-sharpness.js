const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The current image tag looks like:
// <img className="img-polished" 
//   src={slide.img} 
//   alt={slide.tag} 
//   style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 1 }} 

content = content.replace(
  /style=\{\{\s*width:\s*'100%',\s*height:\s*'100%',\s*objectFit:\s*'cover',\s*objectPosition:\s*'center',\s*opacity:\s*1\s*\}\}/g,
  "style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.8, filter: 'contrast(1.1) saturate(1.05)' }}"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed slider image sharpness/opacity');
