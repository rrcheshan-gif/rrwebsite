const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

const newEntry = ",\n  {\n    id: 'project-100',\n    type: 'completed',\n    category: 'maritime',\n    title: 'Harbour Basin Dredging up to -3m MSL Depth at Suduwella Anchorage',\n    status: 'Completed',\n    client: 'Ceylon Fishery Harbours Corporation (CFHC) / UNOPS',\n    location: 'Suduwella Anchorage, Matara, Sri Lanka',\n    duration: '10 Months',\n    value: 'LKR 77 Million',\n    year: 2013,\n    images: [\n      '/images/projects/project-100/1.jpg',\n      '/images/projects/project-100/3.jpg',\n      '/images/projects/project-100/4.jpg',\n      '/images/projects/project-100/5.jpg',\n      '/images/projects/project-100/6.jpg',\n      '/images/projects/project-100/7.jpg',\n      '/images/projects/project-100/8.jpg',\n      '/images/projects/project-100/9.jpg',\n      '/images/projects/project-100/Background image.jpg'\n    ]\n  }";

content = content.replace(/\s*\];\s*\/\/\s*Verify/g, newEntry + '\n];\n\n// Verify');
fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log('Project 100 added.');
