const projects = require('./src/app/projects/data.js').default || require('./src/app/projects/data.js');
const images = new Map();
const duplicates = [];

projects.forEach(p => {
    if (!p.heroImage || p.heroImage.includes('hero.jpeg') || p.heroImage.includes('Ongoing') || p.type === 'ongoing') return;
    const imgKey = p.heroImage.toLowerCase().trim();
    if (images.has(imgKey)) {
        duplicates.push({ image: p.heroImage, id1: images.get(imgKey), id2: p.id });
    } else {
        images.set(imgKey, p.id);
    }
});

console.log('Duplicate Images found:');
duplicates.forEach(d => console.log(d.id1, 'and', d.id2, 'share', d.image));
