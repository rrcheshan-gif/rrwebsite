const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const targetProject = content.substring(content.indexOf("id: 'project-86'"), content.indexOf("id: 'project-87'"));

const locationString = '      location: "Mahanama Bridge, Matara, Sri Lanka",\n      images: [\n        "/images/projects/project-86/Background image.jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.18.jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.19 (1).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.19.jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.20 (1).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.20 (2).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.20 (3).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.20.jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.01 (1).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.01 (2).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.01 (3).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.01.jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.02 (1).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.02 (2).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.02.jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.21.jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.38 (1).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.38 (2).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.38 (3).jpeg",\n        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.38.jpeg"\n      ],\n';

let newTarget = targetProject.replace('client: "Road Development Authority",', 'client: "Road Development Authority",\n' + locationString);

content = content.replace(targetProject, newTarget);
fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log('Project 86 updated.');
