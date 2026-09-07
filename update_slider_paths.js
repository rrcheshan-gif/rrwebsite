const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
    { from: '/images/home/SLIDE_01_NOTEXT.jpg', to: '/images/home/SLIDE_01_NOTEXT-enhanced.jpg' },
    { from: '/images/home/slider/polished/road.jpg', to: '/images/home/slider/polished/road-enhanced.jpg' },
    { from: '/images/home/bridge_mahanama.jpeg', to: '/images/home/bridge_mahanama-enhanced.jpeg' },
    { from: '/images/home/slider/polished/hatton.jpg', to: '/images/home/slider/polished/hatton-enhanced.jpg' },
    { from: '/images/home/slider/polished/omanthai.jpg', to: '/images/home/slider/polished/omanthai-enhanced.jpg' },
    { from: '/images/home/slider/polished/machinery.jpg', to: '/images/home/slider/polished/machinery-enhanced.jpg' }
];

replacements.forEach(rep => {
    content = content.replace(rep.from, rep.to);
});

fs.writeFileSync(file, content, 'utf8');
console.log('Updated page.tsx with enhanced image paths.');
