const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const replacement =     {
      id: 'project-31',
      type: 'completed', category: "roads",
      title: "Rehabilitation of 20.80 Km Rural Roads in Palindanuwara (Kalutara)",
      heroImage: 'images/PYR/palindanuwara-1.jpeg',
      galleryImages: ['images/PYR/palindanuwara-1.jpeg', 'images/PYR/palindanuwara-2.jpeg', 'images/PYR/palindanuwara-3.jpeg', 'images/PYR/palindanuwara-4.jpeg', 'images/PYR/palindanuwara-5.jpeg', 'images/PYR/palindanuwara-6.jpeg', 'images/PYR/palindanuwara-7.jpeg', 'images/PYR/palindanuwara-8.jpeg'],
      status: "Completed",
      client: "Road Development Authority",
      duration: "12 Months",
      year: 2025
    },;

content = content.replace(/\{\s*id:\s*'project-31'[\s\S]*?year:\s*2025\s*\}/, replacement.trim());
fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
