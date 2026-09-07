const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const target = 'title: "Coastal Protection Structures in Seenu Hulhudhoo (Maldives)",';
const replacement = target + "\n" +
"    heroImage: '/images/IMAGES/hulhudo/1.jpg',\n" +
"    galleryImages: [\n" +
"      '/images/IMAGES/hulhudo/1.jpg',\n" +
"      '/images/IMAGES/hulhudo/2.jpg',\n" +
"      '/images/IMAGES/hulhudo/3.jpg',\n" +
"      '/images/IMAGES/hulhudo/4.jpg',\n" +
"      '/images/IMAGES/hulhudo/5.jpg',\n" +
"      '/images/IMAGES/hulhudo/6.jpg',\n" +
"      '/images/IMAGES/hulhudo/7.jpg',\n" +
"      '/images/IMAGES/hulhudo/8.jpg',\n" +
"      '/images/IMAGES/hulhudo/9.jpg',\n" +
"      '/images/IMAGES/hulhudo/10.jpg'\n" +
"    ],";

if(content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
    console.log("Successfully updated Hulhudhoo project.");
} else {
    console.log("Could not find the target string.");
}
