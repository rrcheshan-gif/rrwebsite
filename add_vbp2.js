const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const newProject = `{
    id: 'project-vbp2',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing",
    heroImage: 'images/projects/ongoing/vbp2/Background-image.jpeg',
    galleryImages: [
      'images/projects/ongoing/vbp2/WhatsApp-Image-2026-09-28-at-12.32.24.jpeg',
      'images/projects/ongoing/vbp2/WhatsApp-Image-2026-09-28-at-12.32.25-1.jpeg',
      'images/projects/ongoing/vbp2/WhatsApp-Image-2026-09-28-at-12.32.25-2.jpeg',
      'images/projects/ongoing/vbp2/WhatsApp-Image-2026-09-28-at-12.32.26-1.jpeg',
      'images/projects/ongoing/vbp2/WhatsApp-Image-2026-09-28-at-12.32.26.jpeg',
      'images/projects/ongoing/vbp2/WhatsApp-Image-2026-09-28-at-12.32.27-1.jpeg',
      'images/projects/ongoing/vbp2/WhatsApp-Image-2026-09-28-at-12.32.27-2.jpeg',
      'images/projects/ongoing/vbp2/WhatsApp-Image-2026-09-28-at-12.32.27.jpeg'
    ]
  },`;

content = content.replace('export const projects = [', 'export const projects = [\n  ' + newProject);

fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log("Added new VBP2 project successfully.");
