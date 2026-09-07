const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace cta for buildings-structures
content = content.replace(
    "slug: 'buildings-structures',\n      num: '07',\n      title: 'Civil Structures',\n      subtitle: 'Water Retaining Structures ? Water Towers ? Steel Fabrication',\n      desc: 'Reinforced concrete structures, water retaining structures, elevated water towers, and complex steel fabrication.',\n      highlights: ['Complex RC Structures', 'Elevated Water Towers', 'Heavy Steel Fabrication'],\n      image: '/images/BADULLA/WhatsApp Image 2026-07-28 at 14.03.18.jpeg',\n      cta: '/projects',",
    "slug: 'buildings-structures',\n      num: '07',\n      title: 'Civil Structures',\n      subtitle: 'Water Retaining Structures ? Water Towers ? Steel Fabrication',\n      desc: 'Reinforced concrete structures, water retaining structures, elevated water towers, and complex steel fabrication.',\n      highlights: ['Complex RC Structures', 'Elevated Water Towers', 'Heavy Steel Fabrication'],\n      image: '/images/BADULLA/WhatsApp Image 2026-07-28 at 14.03.18.jpeg',\n      cta: '/services/buildings-structures',"
);

// Replace cta for railway-civil-works
content = content.replace(
    "slug: 'railway-civil-works',\n      num: '08',\n      title: 'Railway Civil Works',\n      subtitle: 'Formation ? Civil Infrastructure ? Track Upgradation',\n      desc: 'Civil and formation works in connection with railway line upgradation projects ?\" earthworks, drainage, retaining structures, and ancillary civil works supporting Sri Lanka\\'s national rail network modernisation.',\n      highlights: ['Railway Formation Works', 'Maho?\"Anuradhapura Line', 'Earthworks & Drainage', 'Ancillary Civil Structures'],\n      image: '/images/IRCON-MANNAR/WhatsApp Image 2026-08-01 at 12.32.07.jpeg',\n      cta: '/projects',",
    "slug: 'railway-civil-works',\n      num: '08',\n      title: 'Railway Civil Works',\n      subtitle: 'Formation ? Civil Infrastructure ? Track Upgradation',\n      desc: 'Civil and formation works in connection with railway line upgradation projects ?\" earthworks, drainage, retaining structures, and ancillary civil works supporting Sri Lanka\\'s national rail network modernisation.',\n      highlights: ['Railway Formation Works', 'Maho?\"Anuradhapura Line', 'Earthworks & Drainage', 'Ancillary Civil Structures'],\n      image: '/images/IRCON-MANNAR/WhatsApp Image 2026-08-01 at 12.32.07.jpeg',\n      cta: '/services/railway-civil-works',"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated CTAs to point to the correct sub-pages.');
