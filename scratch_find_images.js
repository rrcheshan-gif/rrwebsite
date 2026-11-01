const fs = require('fs');
const path = require('path');
const mod = require('./src/app/projects/data.js');
const projects = mod.default || mod.projects || mod;

const completed = projects.filter(p => p.status === 'Completed');
console.log('Total completed projects:', completed.length);

const withExistingImages = [];

completed.forEach(p => {
  let imgPath = p.heroImage;
  let exists = false;
  let fullImg = '';
  if (imgPath) {
    const cleanPath = imgPath.startsWith('/') ? imgPath.slice(1) : imgPath;
    const abs = path.join(__dirname, 'public', cleanPath);
    if (fs.existsSync(abs)) {
      exists = true;
      fullImg = cleanPath;
    }
  }
  if (!exists && p.gallery && p.gallery.length > 0) {
    for (let g of p.gallery) {
      const cleanG = g.startsWith('/') ? g.slice(1) : g;
      const absG = path.join(__dirname, 'public', cleanG);
      if (fs.existsSync(absG)) {
        exists = true;
        fullImg = cleanG;
        break;
      }
    }
  }
  if (exists) {
    withExistingImages.push({
      id: p.id,
      title: p.title,
      category: p.category,
      client: p.client,
      year: p.completionYear || p.year,
      desc: p.description || p.shortDescription || '',
      img: fullImg
    });
  }
});

console.log('Completed projects with valid images on disk:', withExistingImages.length);
withExistingImages.forEach((p, i) => {
  console.log(`${i+1}. [${p.category}] ${p.title} | ${p.client} | ${p.year} | ${p.img}`);
});
