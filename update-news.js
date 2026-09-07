const fs = require('fs');

let content = fs.readFileSync('src/data/news-data.ts', 'utf8');

// Find the Maggona block and replace it.
const oldBlockRegex = /\{\s*id:\s*8,\s*slug:\s*'maggona-railway-bridge-contract-awarded',[\s\S]*?<\/p>\s*\s*\}/;

const newBlock = \{
    id: 8,
    slug: 'pending-railway-project-contract',
    tag: 'Infrastructure',
    title: 'Pending Railway Project',
    desc: 'RR Construction has been officially awarded the contract for the construction of a new railway bridge infrastructure project.',
    date: 'July 21, 2026',
    img: '/images/news/railway-edited.jpg',
    featured: false,
    content: \\\
      <h2>New Contract Award: Pending Railway Project</h2>
      <p><strong>RR Construction (Pvt) Ltd has officially received the Letter of Acceptance for the construction of a major double line railway bridge.</strong></p>

      <p>On July 21, 2026, the contract was formally awarded to RR Construction for the construction of a new railway bridge.</p>

      <h3>Project Scope and Investment</h3>
      <p>The project marks another significant milestone in our ongoing efforts to modernize and enhance the national railway network.</p>

      <h3>Commencement and Execution</h3>
      <p>Following the official acceptance, our engineering and project management teams are mobilizing for immediate deployment. The official commencement date is set for 14 days from the issuance of the Letter of Acceptance, with all preliminary material approvals and reinforcement planning already underway in strict accordance with the contract specifications and engineer's requirements.</p>

      <p>We are fully committed to delivering this project with the highest standards of safety, quality, and structural integrity that RR Construction is known for.</p>
    \\\
  }\;

content = content.replace(oldBlockRegex, newBlock);
fs.writeFileSync('src/data/news-data.ts', content, 'utf8');
console.log("Updated news item.");
