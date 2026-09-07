const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Remove video from slide 2 (Maritime)
//    img: '/images/home/slider-maritime-gandara.jpeg',
//    duration: 8000,
//    tag: '02 / MARITIME & HARBOUR CONSTRUCTION',
//    video: '/videos/GFH.mp4',

content = content.replace("tag: '02 / MARITIME & HARBOUR CONSTRUCTION',\r\n      video: '/videos/GFH.mp4',", "tag: '02 / MARITIME & HARBOUR CONSTRUCTION',");
content = content.replace("tag: '02 / MARITIME & HARBOUR CONSTRUCTION',\n      video: '/videos/GFH.mp4',", "tag: '02 / MARITIME & HARBOUR CONSTRUCTION',");

// 2. Add video to slide 0 (First Slide)
//    img: '/images/home/SLIDE_01_NOTEXT-enhanced.jpg',
//    fallback: '/images/hero-road-roller.jpg',
//    duration: 12000,
//    tag: 'PASSION FOR ENGINEERING EXCELLENCE',

content = content.replace("tag: 'PASSION FOR ENGINEERING EXCELLENCE',", "tag: 'PASSION FOR ENGINEERING EXCELLENCE',\n      video: '/videos/GFH.mp4',");

// 3. Improve the overlay gradient to be slightly darker so the text looks crisp and polished over the video
content = content.replace("rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 100%", "rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.95) 100%");


fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log("Updated slider video placements.");
