const fs = require('fs');
const path = require('path');

// The new background image + gradient (slightly heavier overlay since this is a light image)
const newBg = `linear-gradient(to bottom, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.65) 60%, rgba(15, 23, 42, 0.92) 100%), url('/images/page-headers/engineering-blueprint-banner.jpg')`;
const oldBgs = [
  `linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.3) 60%, rgba(15, 23, 42, 0.9) 100%), url('/images/page-headers/blueprint-bg-hq.jpg')`,
  `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url('/images/page-headers/blueprint-bg-hq.jpg')`,
  `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/images/page-headers/blueprint-bg-hq.jpg')`,
  `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url('/images/page-headers/blueprint-bg-hq.jpg')`,
];

// Pages to update (skip awards)
const pages = [
  'src/app/about/history/page.tsx',
  'src/app/about/vision-mission/page.tsx',
  'src/app/about/key-data/page.tsx',
  'src/app/about/goals-and-targets/page.tsx',
  'src/app/about/board-of-directors/page.tsx',
  'src/app/people/page.tsx',
  'src/app/training/page.tsx',
  'src/app/welfare/page.tsx',
  'src/app/career/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/quality-policy/page.tsx',
];

pages.forEach(file => {
  if (!fs.existsSync(file)) { console.log('SKIP (not found):', file); return; }
  
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace any blueprint-bg-hq hero backgrounds with the new banner
  const bgRegex = /linear-gradient\([^)]+(?:\([^)]*\)[^)]*)*\),\s*url\('\/images\/page-headers\/blueprint-bg-hq\.jpg'\)/g;
  if (bgRegex.test(content)) {
    content = content.replace(bgRegex, newBg);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('UPDATED:', file);
  } else {
    console.log('no blueprint-bg-hq found in:', file);
  }
});
