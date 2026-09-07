const fs = require('fs');
const pages = [
  'src/app/services/road-construction/page.tsx',
  'src/app/services/bridge-construction/page.tsx',
  'src/app/services/dredging-reclamation/page.tsx',
  'src/app/services/maritime-construction/page.tsx',
  'src/app/services/water-infrastructure/page.tsx',
  'src/app/services/landslide-mitigation/page.tsx'
];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the top offset from 20px/40px to 100px/120px to clear the fixed navbar
    content = content.replace("top: isMobile ? '20px' : '40px'", "top: isMobile ? '100px' : '140px'");
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Pushed back button down to clear the navbar.');
