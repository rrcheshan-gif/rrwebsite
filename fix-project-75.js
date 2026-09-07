const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const targetProject = content.substring(content.indexOf("id: 'project-75'"), content.indexOf("id: 'project-76'"));

const locationString = '      location: "Sangupiddy Bridge, Navatkuli - Mannar Road, Sri Lanka",\n      images: [\n        "/images/projects/project-75/Background image.jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.06 (2).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.06 (7).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.06.jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (1).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (3).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (5).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (9).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (13).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (14).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (15).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (16).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (22).jpeg",\n        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (23).jpeg"\n      ],\n';

let newTarget = targetProject.replace('client: "Road Development Authority",', 'client: "Road Development Authority",\n' + locationString);

content = content.replace(targetProject, newTarget);
fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log('Project 75 updated.');
