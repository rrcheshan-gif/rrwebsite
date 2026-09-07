const fs = require('fs');
const files = [
  'src/app/services/road-construction/page.tsx',
  'src/app/services/bridge-construction/page.tsx',
  'src/app/services/maritime-construction/page.tsx',
  'src/app/services/dredging-reclamation/page.tsx',
  'src/app/services/water-infrastructure/page.tsx',
  'src/app/services/landslide-mitigation/page.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Fix 'url('/path')' into 'url("/path")'
  content = content.replace(/'url\('(.+?)'\)'/g, "'url(\"$1\")'");
  // Fix "url('/path')" into "url('/path')" - wait, double quotes on outside is fine.
  // Actually let's just use template literals url('') to be completely safe!
  content = content.replace(/'url\('(.+?)'\)'/g, "url('')");
  // Let's just fix the exact mistakes:
  content = content.replace(/'url\('(.+?)'\)'/g, "'url(\"\")'");
  
  // also check if there are things like 'linear-gradient(...), url('/path')'
  content = content.replace(/, url\('(.+?)'\)'/g, ", url(\"\")'");
  
  fs.writeFileSync(f, content, 'utf8');
});
