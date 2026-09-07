const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix 1: Hero Images opacity
content = content.replace(
  "style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.65 }}",
  "style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 1 }}"
);
// In case it was 0.58 from before (though I replaced it recently)
content = content.replace(
  "style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.58 }}",
  "style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 1 }}"
);

// Fix 2: Services images opacity
content = content.replace(
  "style={{ width: \"100%\", height: \"100%\", objectFit: \"cover\", opacity: 0.6 }} onMouseOver={(e) => { e.currentTarget.style.opacity = '0.8' }} onMouseOut={(e) => { e.currentTarget.style.opacity = '0.6' }}",
  "style={{ width: \"100%\", height: \"100%\", objectFit: \"cover\", opacity: 0.9, transition: \"opacity 0.5s ease\" }} onMouseOver={(e) => { e.currentTarget.style.opacity = '1' }} onMouseOut={(e) => { e.currentTarget.style.opacity = '0.9' }}"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Homepage opacities updated');
