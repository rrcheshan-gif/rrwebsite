const fs = require('fs');

const files = [
  'src/app/services/dredging-reclamation/page.tsx',
  'src/app/services/landslide-mitigation/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Fix "use client"
  if (content.startsWith("import { ArrowLeft } from 'lucide-react';\n\"use client\";")) {
    content = content.replace("import { ArrowLeft } from 'lucide-react';\n\"use client\";", "\"use client\";\nimport { ArrowLeft } from 'lucide-react';");
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed ' + file);
});
