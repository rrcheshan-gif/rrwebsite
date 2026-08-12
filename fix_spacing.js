const fs = require('fs');
const file = 'src/app/quarries-aggregates/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Prevent grid items from stretching to the tallest item, making them wrap tightly
content = content.replace(
    `style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}`,
    `style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", alignItems: "start" }}`
);

// 2. Remove space-between and flex-grow from the card body to eliminate empty gaps
content = content.replace(
    /style=\{\{\s*padding:\s*"25px",\s*flexGrow:\s*1,\s*display:\s*"flex",\s*flexDirection:\s*"column",\s*justifyContent:\s*"space-between"\s*\}\}/g,
    `style={{ padding: "20px", display: "flex", flexDirection: "column" }}`
);

// 3. Remove marginBottom from paragraphs to tighten it further
content = content.replace(
    /marginBottom: "20px" \}\}>/g,
    `marginBottom: "5px" }}>`
);

fs.writeFileSync(file, content, 'utf8');
