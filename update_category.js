const fs = require('fs');

let content = fs.readFileSync('src/app/projects/ongoing/[category]/page.tsx', 'utf8');

// Replace the 'disaster' block
const disasterRegex = /'disaster':\s*\{\s*title:\s*'Landslide Mitigation',\s*img:\s*'[^']+',\s*gallery:\s*\[[\s\S]*?\]\s*\}/;

const newDisasterBlock = `'disaster': { 
      title: 'Landslide Mitigation', 
      img: '/images/projects/ongoing/landslide/img-1.jpeg',
      gallery: [
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

content = content.replace(disasterRegex, newDisasterBlock);
fs.writeFileSync('src/app/projects/ongoing/[category]/page.tsx', content, 'utf8');
console.log("Updated [category]/page.tsx");
