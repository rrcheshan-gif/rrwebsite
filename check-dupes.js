const projects = require('./src/app/projects/data.js').default || require('./src/app/projects/data.js');
const titles = new Map();
const images = new Map();
const duplicates = [];

projects.forEach(p => {
    if (!p.title) return;
    const titleKey = p.title.toLowerCase().trim();
    if (titles.has(titleKey)) {
        duplicates.push({ type: 'Title', value: p.title, id1: titles.get(titleKey), id2: p.id });
    } else {
        titles.set(titleKey, p.id);
    }
});

console.log('Duplicates found:');
duplicates.forEach(d => console.log(d));
