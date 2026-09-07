const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add Mountain to lucide-react imports if not there
if (!content.includes('Mountain')) {
  content = content.replace(/import \{ ([^}]+) \} from "lucide-react";/, 'import { , Mountain } from "lucide-react";');
}

// 2. Add the 5th item to the array
const oldArray = 'text: "Dredging, reclamation, and water supply systems engineered to serve communities at scale." }\\n              ]';
const newArray = 'text: "Dredging, reclamation, and water supply systems engineered to serve communities at scale." },\n                { title: "Landslide Mitigation", img: "/images/kandy-landslide/kandy-5.jpg", icon: <Mountain size={30} />, text: "Expert slope stabilization and rock-fall protection systems in critical hill-country zones." }\n              ]';
content = content.replace(oldArray, newArray);

// 3. Make the 5th item full width on desktop to prevent orphans
const oldCardDiv = '<div key={i} className="modern-service-card glass-panel hover-lift" style={{ minHeight: "300px", position: "relative", overflow: "hidden", padding: 0, borderRadius: "20px" }}>';
const newCardDiv = '<div key={i} className="modern-service-card glass-panel hover-lift" style={{ gridColumn: i === 4 && !isMobile ? "1 / -1" : "auto", minHeight: "300px", position: "relative", overflow: "hidden", padding: 0, borderRadius: "20px" }}>';
content = content.replace(oldCardDiv, newCardDiv);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Added landslide mitigation');
