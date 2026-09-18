const fs = require('fs');

const file = 'src/app/components/QuoteForm.tsx';
let content = fs.readFileSync(file, 'utf8');

const newPlants = `
    { value: "Ampara (Concrete)", label: "Ampara Concrete Batching Plant" },
    { value: "Jaffna (Concrete)", label: "Jaffna Concrete Batching Plant" },
    { value: "Bibila (Concrete)", label: "Bibila Concrete Batching Plant" },
    { value: "Iththapana (Concrete)", label: "Iththapana Concrete Batching Plant" },
    { value: "Vadduvakal (Concrete)", label: "Vadduvakal Concrete Batching Plant (Mullaitivu)" },
    { value: "Galgamuwa (Concrete)", label: "Galgamuwa Concrete Batching Plant" },
    { value: "Gandara (Concrete)", label: "Gandara Concrete Batching Plant (Matara)" }
  ];`;

content = content.replace(/\];\s*const displayProducts/, newPlants + '\n\n  const displayProducts');

// Remove the old closing bracket of allPlants
content = content.replace(/\{ value: "Yakawewa \(North Central\)", label: "Yakawewa Asphalt Plant \(North Central\)" \}\n  \];/g, '{ value: "Yakawewa (North Central)", label: "Yakawewa Asphalt Plant (North Central)" },');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully added concrete plants to QuoteForm');
