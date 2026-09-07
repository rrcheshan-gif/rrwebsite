const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

if (content.includes('const imgPath = project.heroImage || project.images?.[0];')) {
    content = content.replace(
      'const imgPath = project.heroImage || project.images?.[0];',
      'const imgPath = project.heroImage || project.images?.[0] || project.galleryImages?.[0];'
    );
    fs.writeFileSync('src/app/page.tsx', content, 'utf8');
    console.log('Fixed imgPath logic in home page');
}
