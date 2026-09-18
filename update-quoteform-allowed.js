const fs = require('fs');
const file = 'src/app/components/QuoteForm.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add allowedPlants to interface
content = content.replace('defaultPlant?: string;', 'defaultPlant?: string;\n  allowedPlants?: string[];');

// Update destructuring
content = content.replace('({ defaultPlant, allowedProducts }: QuoteFormProps)', '({ defaultPlant, allowedProducts, allowedPlants }: QuoteFormProps)');

// Update filtering logic
const newFilter = `
  let displayPlants = allPlants;
  if (allowedPlants) {
    displayPlants = displayPlants.filter(p => allowedPlants.includes(p.value) || p.value === "Any");
  }
  if (defaultPlant) {
    displayPlants = displayPlants.filter(p => p.value === defaultPlant);
  }
`;

content = content.replace(/const displayPlants = defaultPlant\s*\?\s*allPlants\.filter\(p => p\.value === defaultPlant\)\s*:\s*allPlants;/s, newFilter);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated QuoteForm to support allowedPlants');
