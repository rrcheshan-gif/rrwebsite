const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const newService = `
    {
      slug: 'research-development',
      num: '09',
      title: 'Research & Development',
      subtitle: 'Innovation ? Lean Production ? ERP Systems',
      desc: 'Advancing heavy civil engineering through technological innovation, lean production techniques, and integrated enterprise resource planning.',
      highlights: ['Lean Production', 'AI-assisted ERP Integration', 'Performance Management'],
      image: '/images/research-development.jpg',
      cta: '/services/research-development',
    },
  ];`;

// Just replace the end of the array `  ];` with the new object + `  ];`
// Need to match exactly `    },\n  ];` or similar.

const regex = /\s+\},\s+\];/;
if (content.match(regex)) {
    content = content.replace(regex, "\n    }," + newService);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Appended R&D to SERVICES array.');
} else {
    console.log('Regex did not match.');
}
