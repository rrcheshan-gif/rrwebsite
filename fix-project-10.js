const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const targetProject = content.substring(content.indexOf("id: 'project-10'"), content.indexOf("id: 'project-11'"));

const locationString = '      location: "Kurikadduvan Jetty, Jaffna, Sri Lanka",\n      images: [\n        "/images/projects/project-10/Background image.jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.00 (2).jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.00.jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.01.jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.02 (1).jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.02.jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.03 (1).jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.03.jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.04 (1).jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.04 (2).jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.04.jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.06 (1).jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.06 (2).jpeg",\n        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.06.jpeg"\n      ],\n';

let newTarget = targetProject.replace('client: "Road Development Authority",', 'client: "Road Development Authority",\n' + locationString);

content = content.replace(targetProject, newTarget);
fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log('Project 10 updated.');
