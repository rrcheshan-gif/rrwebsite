const fs = require('fs');
let c = fs.readFileSync('src/app/projects/data.js', 'utf8');

const oldProject = `{
    id: 'project-30',
    type: 'completed', category: "roads",
    title: "Rehabilitation of 30.12km Rural Roads in Rathnapura",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "18 Months",
    year: 2025
  }`;

const newProject = `{
    id: 'project-30',
    type: 'completed', category: "roads",
    title: "Rehabilitation of 30.12km Rural Roads in Rathnapura",
    heroImage: '/images/IMAGES/RRP/20240201_074339.jpg',
    galleryImages: ['/images/IMAGES/RRP/20240201_074339.jpg', '/images/IMAGES/RRP/20240201_074620.jpg', '/images/IMAGES/RRP/20240201_074651.jpg', '/images/IMAGES/RRP/20240201_074941.jpg', '/images/IMAGES/RRP/Background image.jpg', '/images/IMAGES/RRP/IMG-20240202-WA0039.jpg', '/images/IMAGES/RRP/IMG-20240202-WA0040.jpg', '/images/IMAGES/RRP/IMG-20240202-WA0044.jpg', '/images/IMAGES/RRP/IMG-20240307-WA0035 (1).jpg', '/images/IMAGES/RRP/IMG-20240307-WA0045.jpg', '/images/IMAGES/RRP/IMG-20240307-WA0049.jpg', '/images/IMAGES/RRP/IMG-20240407-WA0013.jpg', '/images/IMAGES/RRP/IMG-20240407-WA0015.jpg'],
    status: "Completed",
    client: "Road Development Authority",
    duration: "18 Months",
    year: 2025
  }`;

if (c.includes(oldProject)) {
  c = c.replace(oldProject, newProject);
  fs.writeFileSync('src/app/projects/data.js', c, 'utf8');
  console.log("Successfully updated project-30");
} else {
  console.log("Failed to find exact block. Let's do a regex replace.");
  
  c = c.replace(
    /id:\s*'project-30',[\s\S]*?year:\s*2025\s*\}/,
    newProject
  );
  fs.writeFileSync('src/app/projects/data.js', c, 'utf8');
  console.log("Regex replace executed.");
}
