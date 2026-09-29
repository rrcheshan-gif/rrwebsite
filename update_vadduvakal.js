const fs = require('fs');
let content = fs.readFileSync('src/app/resources/concrete/page.tsx', 'utf8');

content = content.replace(
    /\{ name: "Vadduvakal", district: "Mullaitivu", image: "\/images\/resources\/concrete\/vadduvakal-plant\.jpg" \}/,
    '{ name: "Vadduvakal", district: "Mullaitivu", image: "/images/resources/concrete/vadduvakal-plant.jpg", mapLink: "https://maps.app.goo.gl/jbcU7ZPpsuu7PJLA6" }'
);

fs.writeFileSync('src/app/resources/concrete/page.tsx', content, 'utf8');
console.log("Updated Vadduvakal successfully.");
