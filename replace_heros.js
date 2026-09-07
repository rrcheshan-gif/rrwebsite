const fs = require('fs');

const replaces = [
  {
    file: 'src/app/services/road-construction/page.tsx',
    search: /backgroundImage: .*/g,
    replace: 'backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(\'/images/hambantota-iroad/hambantota-2.jpg\')",'
  },
  {
    file: 'src/app/services/bridge-construction/page.tsx',
    search: /backgroundImage: .*/g,
    replace: 'backgroundImage: "url(\'/images/service-bridge-hero.jpeg\')",'
  },
  {
    file: 'src/app/services/maritime-construction/page.tsx',
    search: /backgroundImage: .*/g,
    replace: 'backgroundImage: "url(\'/images/gandara/gandara-3.jpg\')",'
  },
  {
    file: 'src/app/services/dredging-reclamation/page.tsx',
    search: /backgroundImage: .*/g,
    replace: 'backgroundImage: "linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url(\'/images/projects/filadhoo/img3.jpg\')",'
  },
  {
    file: 'src/app/services/water-infrastructure/page.tsx',
    search: /backgroundImage: 'linear-gradient\(rgba\(0, 0, 0, 0\.7\), rgba\(0, 0, 0, 0\.7\)\), url.*/g,
    replace: 'backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'/images/service-water-hero.jpeg\')",'
  },
  {
    file: 'src/app/services/landslide-mitigation/page.tsx',
    search: /backgroundImage: .*/g,
    replace: 'backgroundImage: "url(\'/images/service-landslide-hero.jpeg\')",'
  }
];

replaces.forEach(item => {
  let content = fs.readFileSync(item.file, 'utf8');
  if (item.search.test(content)) {
    content = content.replace(item.search, item.replace);
    fs.writeFileSync(item.file, content, 'utf8');
    console.log('Updated ' + item.file);
  } else {
    console.log('No match found in ' + item.file);
  }
});
