const fs = require('fs');
let data = fs.readFileSync('src/app/projects/data.js', 'utf8');

const newProject = [
  '  {',
  '    id: \'project-ldpp-package-02\',',
  '    type: \'completed\',',
  '    category: \'disaster\',',
  '    title: \'Landslide Disaster Protection Project - Package 02 (Countermeasures at Six Locations in Sabaragamuwa and Uva Provinces)\',',
  '    status: \'Completed\',',
  '    client: \'Road Development Authority\',',
  '    duration: \'Contract Awarded 2017\',',
  '    year: 2017,',
  '    heroImage: \'/images/IMAGES/LDPP/DJI_0087.jpg\',',
  '    galleryImages: [',
  '      \'/images/IMAGES/LDPP/DJI_0087.jpg\'',
  '    ]',
  '  },'
].join('\n');

data = data.replace('// 2016', newProject + '\n\n  // 2016');
fs.writeFileSync('src/app/projects/data.js', data);
console.log('Project inserted.');
