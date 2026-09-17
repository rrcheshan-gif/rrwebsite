const projects = require('./src/app/projects/data.js').default || require('./src/app/projects/data.js');
const ongoing = projects.filter(p => p.type === 'ongoing' || p.status && p.status.toLowerCase().includes('ongoing'));
const images = ongoing.map(p => {
    let img = p.heroImage || (p.galleryImages && p.galleryImages[0]);
    return { id: p.id, title: p.title, img };
}).filter(x => x.img && x.img !== '/images/hero.jpeg');
console.log(JSON.stringify(images, null, 2));
