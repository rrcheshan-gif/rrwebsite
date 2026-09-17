const fs = require('fs');

const newBg = `linear-gradient(to bottom, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.65) 60%, rgba(15, 23, 42, 0.92) 100%), url('/images/page-headers/engineering-blueprint-banner.jpg')`;

// Pages to update - skip awards
const pages = [
  'src/app/about/vision-mission/page.tsx',
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
  
  // Replace any url('/images/...') inside a backgroundImage that's in a page-header
  // Strategy: find backgroundImage lines and replace the url() part
  const newContent = content.replace(
    /backgroundImage:\s*["'`]([^"'`]*url\(['"\/][^)'"]+['"]\)[^"'`]*)["'`]/g,
    (match, inner) => {
      // Only replace if it's a page-header style hero (contains linear-gradient)
      if (inner.includes('linear-gradient') && !inner.includes('engineering-blueprint-banner')) {
        return `backgroundImage: "${newBg}"`;
      }
      return match;
    }
  );
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('UPDATED:', file);
  } else {
    console.log('no hero backgroundImage found:', file);
  }
});
