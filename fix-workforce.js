const fs = require('fs');

const files = [
  { path: 'src/app/about/awards/page.tsx', search: '1,800 highly', replace: '1,400+ highly' },
  { path: 'src/app/about/goals-and-targets/page.tsx', search: '1,800+ employees', replace: '1,400+ employees' },
  { path: 'src/app/career/page.tsx', search: '1,800-strong', replace: '1,400-strong' },
  { path: 'src/app/people/page.tsx', search: '1,800 dedicated', replace: '1,400+ dedicated' }
];

files.forEach(f => {
  if (fs.existsSync(f.path)) {
    let content = fs.readFileSync(f.path, 'utf8');
    content = content.replace(f.search, f.replace);
    fs.writeFileSync(f.path, content, 'utf8');
    console.log('Fixed ' + f.path);
  }
});
