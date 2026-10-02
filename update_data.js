const fs = require('fs');

let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const projectRegex = /id:\s*'project-mod-landslide-10d'[\s\S]*?galleryImages:\s*\[[\s\S]*?\]\s*\}/;

const newProjectBlock = `id: 'project-mod-landslide-10d',
      type: 'ongoing',
      category: "disaster",
      title: "Ongoing Landslide Mitigation Project",
      client: "Confidential",
      duration: "Ongoing",
      year: 2025,
      status: "Ongoing",
      heroImage: '/images/projects/ongoing/landslide/img-1.jpeg',
      galleryImages: [
        '/images/projects/ongoing/landslide/img-1.jpeg',
        '/images/projects/ongoing/landslide/img-2.jpeg',
        '/images/projects/ongoing/landslide/img-3.jpeg',
        '/images/projects/ongoing/landslide/img-4.jpeg',
        '/images/projects/ongoing/landslide/img-5.jpeg',
        '/images/projects/ongoing/landslide/img-6.jpeg',
        '/images/projects/ongoing/landslide/img-7.jpeg',
        '/images/projects/ongoing/landslide/img-8.jpeg',
        '/images/projects/ongoing/landslide/img-9.jpeg',
        '/images/projects/ongoing/landslide/img-10.jpeg',
        '/images/projects/ongoing/landslide/img-11.jpeg',
        '/images/projects/ongoing/landslide/img-12.jpeg',
        '/images/projects/ongoing/landslide/img-13.jpeg',
        '/images/projects/ongoing/landslide/img-14.jpeg',
        '/images/projects/ongoing/landslide/img-15.jpeg',
        '/images/projects/ongoing/landslide/img-16.jpeg',
        '/images/projects/ongoing/landslide/img-17.jpeg'
      ]
    }`;

content = content.replace(projectRegex, newProjectBlock);

fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log("Updated data.js");
