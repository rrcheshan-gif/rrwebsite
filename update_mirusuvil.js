const fs = require('fs');
let content = fs.readFileSync('src/app/resources/concrete/page.tsx', 'utf8');

content = content.replace(
    /\{ name: "Jaffna", district: "Jaffna", image: "\/images\/resources\/concrete\/jaffna-plant\.jpg" \}/g,
    '{ name: "Mirusuvil", district: "Jaffna", image: "/images/resources/concrete/jaffna-plant.jpg" }'
);

fs.writeFileSync('src/app/resources/concrete/page.tsx', content, 'utf8');
console.log("Renamed Jaffna to Mirusuvil.");
