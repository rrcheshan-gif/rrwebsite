const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Find the SECOND "Our Direction Section" and remove it entirely (up to Brand Statement Banner)
const first = content.indexOf('{/* Our Direction Section */}');
const second = content.indexOf('{/* Our Direction Section */}', first + 1);

if (second !== -1) {
  // Find the end of the second Our Direction section (the closing </section>)
  const brandBanner = content.indexOf('{/* Brand Statement Banner */}', second);
  if (brandBanner !== -1) {
    // Remove from second Our Direction to Brand Statement Banner (exclusive)
    content = content.substring(0, second) + content.substring(brandBanner);
  }
}

// Fix broken em-dash character
content = content.replace('integrity\uFFFDcombining', 'integrity \u2014 combining');
content = content.replace('integrity?combining', 'integrity \u2014 combining');

fs.writeFileSync(file, content, 'utf8');
console.log('Removed duplicate Our Direction and fixed broken character');
