const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regexOurDirection = /{[\s]*\/\* Our Direction Section \*\/[\s\S]*?<\/section>/;
const matchOurDirection = content.match(regexOurDirection);

if (matchOurDirection) {
  const ourDirectionBlock = matchOurDirection[0];
  content = content.replace(ourDirectionBlock, ''); // Remove it from the bottom
  
  // Now place it before {/* Brand Statement Banner */}
  const brandBannerMarker = "{/* Brand Statement Banner */}";
  content = content.replace(brandBannerMarker, ourDirectionBlock + '\n\n      ' + brandBannerMarker);
  
  fs.writeFileSync(file, content, 'utf8');
}
