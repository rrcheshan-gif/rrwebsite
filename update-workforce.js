const fs = require('fs');

// 1. Update company-data.ts
let companyData = fs.readFileSync('src/data/company-data.ts', 'utf8');
companyData = companyData.replace(/workforce: "1,800",/, 'workforce: "1400+",');
fs.writeFileSync('src/data/company-data.ts', companyData, 'utf8');

// 2. Update projects/[id]/page.tsx
let projectPage = fs.readFileSync('src/app/projects/[id]/page.tsx', 'utf8');
projectPage = projectPage.replace(/workforce of over 1,400 professionals/g, 'workforce of over 1400 professionals');
fs.writeFileSync('src/app/projects/[id]/page.tsx', projectPage, 'utf8');

// 3. Update welfare/page.tsx
let welfarePage = fs.readFileSync('src/app/welfare/page.tsx', 'utf8');
welfarePage = welfarePage.replace(/1,800\+ workforce/g, '1400+ workforce');
fs.writeFileSync('src/app/welfare/page.tsx', welfarePage, 'utf8');

// 4. Update health-and-safety/layout.tsx
let hsLayout = fs.readFileSync('src/app/sustainability/health-and-safety/layout.tsx', 'utf8');
hsLayout = hsLayout.replace(/1800\+ workforce/g, '1400+ workforce');
fs.writeFileSync('src/app/sustainability/health-and-safety/layout.tsx', hsLayout, 'utf8');

console.log('Workforce data updated to 1400+.');
