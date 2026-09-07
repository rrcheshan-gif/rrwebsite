const fs = require('fs');
const path = require('path');

const dirPath = 'public/images/IMAGES/Photos - Fihladhoo/New folder (2)';
const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

const imagePaths = files.map(f => "/images/IMAGES/Photos - Fihladhoo/New folder (2)/" + f);

let content = fs.readFileSync('src/app/projects/data.js', 'utf8');
const target = 'title: "Ha. Filadhoo Harbour Construction (Maldives)",';

// Format as JS array
const arrayString = JSON.stringify(imagePaths, null, 6);

const replacement = target + "\n" +
"      heroImage: '/images/IMAGES/Photos - Fihladhoo/New folder (2)/" + files[0] + "',\n" +
"      galleryImages: " + arrayString + ",";

if(content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
    console.log("Successfully updated Filadhoo project with " + files.length + " images.");
} else {
    console.log("Could not find the target string.");
}
