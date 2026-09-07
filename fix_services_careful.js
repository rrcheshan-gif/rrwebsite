const fs = require('fs');

let content = fs.readFileSync('src/app/services/page.tsx', 'utf8');

// Use literal strings
content = content.replace("National Highways \uFFFD?\uFFFD Rural Roads \uFFFD?\uFFFD Rehabilitation", "National Highways • Rural Roads • Rehabilitation");
content = content.replace("River Crossings \uFFFD?\uFFFD Overpasses \uFFFD?\uFFFD Causeways", "River Crossings • Overpasses • Causeways");
content = content.replace("Fishery Harbours \uFFFD?\uFFFD Breakwaters \uFFFD?\uFFFD Marine Heavy Civil Engineering", "Fishery Harbours • Breakwaters • Marine Heavy Civil Engineering");
content = content.replace("Capital Dredging \uFFFD?\uFFFD Land Reclamation \uFFFD?\uFFFD Coastal Works", "Capital Dredging • Land Reclamation • Coastal Works");
content = content.replace("Water Supply \uFFFD?\uFFFD Treatment Plants \uFFFD?\uFFFD Irrigation", "Water Supply • Treatment Plants • Irrigation");
content = content.replace("Geotechnical Engineering \uFFFD?\uFFFD Retaining Structures \uFFFD?\uFFFD Rock-fall Protection", "Geotechnical Engineering • Retaining Structures • Rock-fall Protection");
content = content.replace("Water Retaining Structures \uFFFD?\uFFFD Water Towers \uFFFD?\uFFFD Steel Fabrication", "Water Retaining Structures • Water Towers • Steel Fabrication");
content = content.replace("Formation \uFFFD?\uFFFD Civil Infrastructure \uFFFD?\uFFFD Track Upgradation", "Formation • Civil Infrastructure • Track Upgradation");
content = content.replace("coastline \uFFFD?\" fishery harbours", "coastline - fishery harbours");
content = content.replace("hill-country zones \uFFFD?\" soil nailing", "hill-country zones - soil nailing");
content = content.replace("projects \uFFFD?\" earthworks", "projects - earthworks");

fs.writeFileSync('src/app/services/page.tsx', content, 'utf8');
