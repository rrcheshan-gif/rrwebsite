const fs = require('fs');
const file = 'src/app/projects/data.js';
let content = fs.readFileSync(file, 'utf8');

// The images we want to extract
const imagesCode = `      heroImage: 'images/Badulla Landslide/Background image.jpeg',
      galleryImages: [
        'images/Badulla Landslide/Background image.jpeg',
        'images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.31.jpeg',
        'images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.34.jpeg',
        'images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.43.jpeg',
        'images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.45.jpeg'
      ]`;

// Add the images to project-mod-landslide-10d
const targetProjectRegex = /(id:\s*'project-mod-landslide-10d'[\s\S]*?status:\s*"Ongoing")/g;
content = content.replace(targetProjectRegex, `$1,\n${imagesCode}`);

// Remove project-13 entirely
// Note: We need to match the entire object block
const project13Regex = /\s*\{\s*id:\s*'project-13'[\s\S]*?\]\s*\},/g;
content = content.replace(project13Regex, '');

fs.writeFileSync(file, content, 'utf8');
console.log("Successfully updated projects.");
