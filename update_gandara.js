const fs = require('fs');

const file = 'src/app/projects/data.js';
let content = fs.readFileSync(file, 'utf8');

const regex = /(id:\s*'project-32'[\s\S]*?title:\s*'Construction of Gandara Fishery Harbour',\s*)heroImage:\s*['"].*?['"],\s*galleryImages:\s*\[[\s\S]*?\],/g;

const newString = `$1heroImage: '/images/IMAGES/Gandara/gandara-bg.jpeg',
      galleryImages: [
        '/images/IMAGES/Gandara/gandara-bg.jpeg',
        '/images/IMAGES/Gandara/gandara-1.jpeg',
        '/images/IMAGES/Gandara/gandara-2.jpeg',
        '/images/IMAGES/Gandara/gandara-3.jpeg',
        '/images/IMAGES/Gandara/gandara-4.jpeg',
        '/images/IMAGES/Gandara/gandara-5.jpeg',
        '/images/IMAGES/Gandara/gandara-6.jpeg',
        '/images/IMAGES/Gandara/gandara-7.jpeg'
      ],`;

if(regex.test(content)) {
    content = content.replace(regex, newString);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully updated Gandara project.');
} else {
    console.log('Regex did not match.');
}
