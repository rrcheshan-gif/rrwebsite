const fs = require('fs');

const pages = [
  'src/app/page.tsx',
  'src/app/about/company-overview/page.tsx',
  'src/app/about/history/page.tsx',
  'src/app/about/leadership/page.tsx',
  'src/app/about/vision-mission/page.tsx',
  'src/app/about/goals-and-targets/page.tsx',
  'src/app/about/awards/page.tsx',
  'src/app/services/page.tsx',
];

const servicePages = fs.readdirSync('src/app/services')
  .filter(f => fs.statSync('src/app/services/' + f).isDirectory())
  .map(dir => 'src/app/services/' + dir + '/page.tsx');
  
pages.push(...servicePages);

let report = "";
pages.forEach(p => {
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    report += '\n--- ' + p + ' ---\n';
    
    const tags = content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gs) || [];
    const pTags = content.match(/<p[^>]*>(.*?)<\/p>/gs) || [];
    
    report += tags.map(t => t.replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 20).join('\n') + '\n';
    report += pTags.map(t => t.replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 30).join('\n') + '\n';
  }
});

fs.writeFileSync('audit-summary.txt', report);
console.log('Saved audit summary.');
