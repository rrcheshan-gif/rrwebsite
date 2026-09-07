const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Remove video from slide 3 (Maritime)
// Before:
//    img: '/images/home/slider-maritime-gandara.jpeg',
//    duration: 8000,
//    tag: '02 / MARITIME & HARBOUR CONSTRUCTION',
//    video: '/videos/GFH.mp4',
const oldMaritimeSlide = `img: '/images/home/slider-maritime-gandara.jpeg',
      duration: 8000,
      tag: '02 / MARITIME & HARBOUR CONSTRUCTION',
      video: '/videos/GFH.mp4',`;
const newMaritimeSlide = `img: '/images/home/slider-maritime-gandara.jpeg',
      duration: 8000,
      tag: '02 / MARITIME & HARBOUR CONSTRUCTION',`;
      
content = content.replace(oldMaritimeSlide, newMaritimeSlide);

// 2. Add video to slide 1 (Engineering Sri Lanka's Tomorrow)
// Before:
//    img: '/images/home/SLIDE_01_NOTEXT-enhanced.jpg',
//    fallback: '/images/hero-road-roller.jpg',
//    duration: 12000,
const oldFirstSlide = `img: '/images/home/SLIDE_01_NOTEXT-enhanced.jpg',
      fallback: '/images/hero-road-roller.jpg',
      duration: 12000,`;
const newFirstSlide = `img: '/images/home/SLIDE_01_NOTEXT-enhanced.jpg',
      fallback: '/images/hero-road-roller.jpg',
      duration: 12000,
      video: '/videos/GFH.mp4',`;

content = content.replace(oldFirstSlide, newFirstSlide);

// Also let's increase the polish by ensuring the gradient overlay is solid enough for the video
// Right now it's: background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 100%)'
// Maybe we make it slightly darker at the top too: rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.9) 100%
content = content.replace(
  "background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.85) 100%)'", 
  "background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.9) 100%)'"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log("Updated slider video placements.");
