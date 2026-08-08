const fs = require('fs');
let content = fs.readFileSync('src/app/quarries-aggregates/page.tsx', 'utf8');

content = content.replace(
    'Serving Colombo and Western Province developments, providing high-yield aggregates for high-rise buildings and expressways.',
    'Serving Colombo and Western Province developments, providing high-yield aggregates for high-rise buildings, expressways, and major infrastructure projects. Equipped with state-of-the-art crushing technology to ensure consistent material quality.'
);

content = content.replace(
    'Advanced Sand Plant manufacturing high-quality M-Sand and premium washed aggregates.',
    'Advanced Sand Plant manufacturing high-quality M-Sand and premium washed aggregates. Designed to meet eco-friendly construction standards while providing superior compressive strength for structural engineering.'
);

content = content.replace(
    'A key aggregates supplier for Northern infrastructure development and commercial sectors.',
    'A key aggregates supplier for Northern infrastructure development and commercial sectors. Operating with high-capacity machinery to deliver uninterrupted material supply for large-scale provincial road and bridge constructions.'
);

content = content.replace(
    'Premium hot-mix asphalt supplier for major highway and road paving projects across the region.',
    'Premium hot-mix asphalt supplier for major highway and road paving projects across the region. Featuring automated temperature and mix-control systems to guarantee maximum durability and smooth road surface finishes.'
);

fs.writeFileSync('src/app/quarries-aggregates/page.tsx', content, 'utf8');
console.log("Updated descriptions.");
