const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Remove poster from video tag
c = c.replace(
  '                  poster={slide.img} \n                  autoPlay',
  '                  autoPlay'
);

// 2. Add preload=auto for faster video loading
c = c.replace(
  '                  playsInline\n                  style={{ width',
  '                  playsInline\n                  preload="auto"\n                  style={{ width'
);

// 3. Add dark background to slide container so while video loads no image shows
c = c.replace(
  "opacity: index === currentSlide ? 1 : 0,\n              zIndex: 1",
  "opacity: index === currentSlide ? 1 : 0,\n              background: '#0f172a',\n              zIndex: 1"
);

fs.writeFileSync('src/app/page.tsx', c, 'utf8');

const checks = [
  c.includes("poster") ? "POSTER STILL THERE ?" : "Poster removed ?",
  c.includes("preload") ? "preload added ?" : "preload MISSING ?",
  c.includes("#0f172a") ? "Dark bg added ?" : "Dark bg MISSING ?",
];
checks.forEach(console.log);
