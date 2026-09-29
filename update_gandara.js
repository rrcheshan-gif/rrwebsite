const fs = require('fs');
let content = fs.readFileSync('src/app/resources/concrete/page.tsx', 'utf8');

// 1. Add mapLink to Gandara
content = content.replace(
    /\{ name: "Gandara", district: "Matara", image: "\/images\/resources\/concrete\/gandara-plant\.jpg" \}/,
    '{ name: "Gandara", district: "Matara", image: "/images/resources/concrete/gandara-plant.jpg", mapLink: "https://maps.app.goo.gl/zFmLWKXwNahvweFP8" }'
);

// 2. Add the button in the map loop
const btnRegex = /(<a href="\/resources\/request-order" className="btn-glass-red btn-glass-sm" style=\{\{ width: "100%", textAlign: "center", textDecoration: "none" \}\} >Request Quote<\/a>)/;

const newBtn = $1\n                      {plant.mapLink && (\n                        <a href={plant.mapLink} target="_blank" rel="noopener noreferrer" className="btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none", border: "1px solid var(--primary-red)", background: "var(--white)", color: "var(--primary-red)", fontWeight: "bold" }}>📍 View on Map</a>\n                      )};

if (btnRegex.test(content)) {
    content = content.replace(btnRegex, newBtn);
    fs.writeFileSync('src/app/resources/concrete/page.tsx', content, 'utf8');
    console.log("Updated Gandara with map link button successfully.");
} else {
    console.log("Could not find button regex.");
}
