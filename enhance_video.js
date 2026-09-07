const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Fix the video styling to remove opacity and add cinematic filter for better quality
const oldVideoStyle = `style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9 }}`;
const newVideoStyle = `style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(1.05) contrast(1.05)' }}`;
content = content.replace(oldVideoStyle, newVideoStyle);

// 2. Fix the image styling which also had opacity: 0.9
const oldImgStyle = `style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9 }}`;
const newImgStyle = `style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}`;
content = content.replace(oldImgStyle, newImgStyle);

// 3. Make the gradient overlay significantly lighter so the high-quality video/images can be seen clearly
// Old: background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.95) 100%)'
const oldGradient = `background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.95) 100%)'`;
const newGradient = `background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.75) 100%)'`;
content = content.replace(oldGradient, newGradient);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log("Improved video and slider visual quality.");
