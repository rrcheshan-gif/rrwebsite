const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const targetProject = content.substring(content.indexOf("id: 'project-80'"), content.indexOf("id: 'project-81'"));

const locationString = '      location: "Oluvil Port, Eastern Province, Sri Lanka",\n      images: [\n        "/images/projects/project-80/1.jpg",\n        "/images/projects/project-80/2.jpg"\n      ],\n';

let newTarget = targetProject.replace('client: "Sri Lanka Ports Authority",', 'client: "Sri Lanka Ports Authority",\n' + locationString);

content = content.replace(targetProject, newTarget);
fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log('Project 80 updated.');
