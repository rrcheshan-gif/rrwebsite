const fs = require('fs');
let content = fs.readFileSync('src/app/projects/[id]/page.tsx', 'utf8');

const target1 = "const hasGallery = galleryImages.length > 0;";
const replacement1 = target1 + "\n  const heroImg = project.heroImage || (galleryImages.length > 0 ? (galleryImages.find((img) => img.toLowerCase().includes('background')) || galleryImages[0]) : null);";

content = content.replace(target1, replacement1);

content = content.replace(/background: project\.heroImage \? (.*?) : 'linear-gradient\(135deg, #B71C1C 0%, #E53935 100%\)',/g, (match, p1) => {
    let replaced = p1.replace(/project\.heroImage/g, 'heroImg');
    // I also want to darken it a bit since some images might be bright, making the white text hard to read.
    replaced = replaced.replace(/rgba\(0,0,0,0\.8\)/g, 'rgba(0,0,0,0.9)');
    replaced = replaced.replace(/rgba\(0,0,0,0\.2\)/g, 'rgba(0,0,0,0.3)');
    return "background: heroImg ? " + replaced + " : 'linear-gradient(135deg, #B71C1C 0%, #E53935 100%)',";
});


fs.writeFileSync('src/app/projects/[id]/page.tsx', content, 'utf8');
console.log('Fixed hero image logic');
