const fs = require('fs');

let content = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

// Add 'dredging' to the array right after 'maritime'
content = content.replace(
    /\['all', 'roads', 'bridges', 'water', 'drainage', 'maritime', 'buildings', 'irrigation', 'disaster', 'railway'\]/,
    "['all', 'roads', 'bridges', 'water', 'drainage', 'maritime', 'dredging', 'buildings', 'irrigation', 'disaster', 'railway']"
);

// Add the label mapping for dredging
content = content.replace(
    /f === 'all' \? 'All Projects' : f === 'disaster' \? 'Slope Stabilization & Landslide Mitigation' : f === 'roads' \? 'Roads and Highway' : f === 'drainage' \? 'Storm Water Drainage' : f/,
    "f === 'all' ? 'All Projects' : f === 'disaster' ? 'Slope Stabilization & Landslide Mitigation' : f === 'roads' ? 'Roads and Highway' : f === 'drainage' ? 'Storm Water Drainage' : f === 'dredging' ? 'Dredging and Reclamation' : f"
);

fs.writeFileSync('src/app/projects/page.tsx', content, 'utf8');
console.log("Updated projects page filter tabs.");
