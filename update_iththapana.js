const fs = require('fs');
let content = fs.readFileSync('src/app/resources/concrete/page.tsx', 'utf8');

content = content.replace(
    /\{ name: "Iththapana", district: "Kalutara", image: "\/images\/iththapana-concrete\.jpg" \}/,
    '{ name: "Iththapana", district: "Kalutara", image: "/images/iththapana-concrete.jpg", mapLink: "https://maps.google.com/maps?q=6.427356,80.086922" }'
);

fs.writeFileSync('src/app/resources/concrete/page.tsx', content, 'utf8');
console.log("Updated Iththapana successfully.");
