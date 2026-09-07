const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const targetProject = content.substring(content.indexOf("id: 'project-72'"), content.indexOf("id: 'project-73'"));

const locationString = '      location: "R. Vandhoo, Maldives",\n      images: [\n        "/images/projects/project-72/20160428_085418.jpg",\n        "/images/projects/project-72/20160428_085953.jpg",\n        "/images/projects/project-72/20160428_090236.jpg",\n        "/images/projects/project-72/20160428_091044.jpg",\n        "/images/projects/project-72/20160428_091144.jpg",\n        "/images/projects/project-72/20160428_121904.jpg",\n        "/images/projects/project-72/20160430_090749.jpg",\n        "/images/projects/project-72/20160430_090757.jpg",\n        "/images/projects/project-72/20160430_100504.jpg",\n        "/images/projects/project-72/20160430_100918.jpg",\n        "/images/projects/project-72/20160430_100958.jpg",\n        "/images/projects/project-72/Background image.jpg",\n        "/images/projects/project-72/photo 2.jpg",\n        "/images/projects/project-72/photo 3.jpg",\n        "/images/projects/project-72/photo 4.jpg",\n        "/images/projects/project-72/photo 5.jpg",\n        "/images/projects/project-72/photo 6.jpg",\n        "/images/projects/project-72/photo1.jpg",\n        "/images/projects/project-72/Share2016-05-06-0a300812b7afdb3f0016cf22bf83b9fdb707f36387a5cf1f00fddda69d33ad55-Picture.jpg",\n        "/images/projects/project-72/Share2016-05-06-49da5edaa797b3330e3e1c0728bacb03573df608a9906111e53ce30f6d230ea6-Picture.jpg",\n        "/images/projects/project-72/Share2016-05-06-5db6d05018dd05537477cef5a2d29eace72f895fc5333acd0644bf72050eb7d0-Picture.jpg",\n        "/images/projects/project-72/Share2016-05-06-d3433e7d7e31efac5a9b84119c6faf0361a1f9159e7bdf0887ff01c5bc6dd547-Picture.jpg"\n      ],\n';

let newTarget = targetProject.replace('client: "Ministry of Environment (Maldives)",', 'client: "Ministry of Environment (Maldives)",\n' + locationString);

content = content.replace(targetProject, newTarget);
fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log('Project 72 updated.');
