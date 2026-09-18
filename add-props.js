const fs = require('fs');

function updatePage(file, propsStr) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<QuoteForm \/>/g, `<QuoteForm ${propsStr} />`);
    fs.writeFileSync(file, content, 'utf8');
}

// Inner Pages (Restrict Plant and Product)
updatePage('src/app/resources/asphalt/yakawewa/page.tsx', 'defaultPlant="Yakawewa (North Central)" allowedProducts={["Asphalt Binder Course", "Asphalt Wearing Course", "Other"]}');
updatePage('src/app/resources/crusher/thudugala/page.tsx', 'defaultPlant="Thudugala (Western)" allowedProducts={["3/4 Metal", "1/2 Metal", "1 Metal", "ABC", "Other"]}');
updatePage('src/app/resources/crusher/omanthai/page.tsx', 'defaultPlant="Omanthai (Northern)" allowedProducts={["3/4 Metal", "1/2 Metal", "1 Metal", "ABC", "Other"]}');
updatePage('src/app/resources/sand/veerapuram/page.tsx', 'defaultPlant="Veerapuram (North Central)" allowedProducts={["M-Sand", "ABC", "Other"]}');

// Category Pages (Restrict Product only)
updatePage('src/app/resources/asphalt/page.tsx', 'allowedProducts={["Asphalt Binder Course", "Asphalt Wearing Course", "Other"]}');
updatePage('src/app/resources/crusher/page.tsx', 'allowedProducts={["3/4 Metal", "1/2 Metal", "1 Metal", "ABC", "Other"]}');
updatePage('src/app/resources/sand/page.tsx', 'allowedProducts={["M-Sand", "Other"]}');
updatePage('src/app/resources/concrete/page.tsx', 'allowedProducts={["Ready-Mix Concrete", "Other"]}');

console.log('Successfully added props to QuoteForms');
