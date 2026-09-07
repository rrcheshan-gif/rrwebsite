const fs = require('fs');
let content = fs.readFileSync('src/app/services/page.tsx', 'utf8');

// Replace  characters
content = content.replace(/National Highways.*?Rural Roads.*?Rehabilitation/g, 'National Highways • Rural Roads • Rehabilitation');
content = content.replace(/River Crossings.*?Overpasses.*?Causeways/g, 'River Crossings • Overpasses • Causeways');
content = content.replace(/Fishery Harbours.*?Breakwaters.*?Marine Heavy Civil Engineering/g, 'Fishery Harbours • Breakwaters • Marine Heavy Civil Engineering');
content = content.replace(/Capital Dredging.*?Land Reclamation.*?Coastal Works/g, 'Capital Dredging • Land Reclamation • Coastal Works');
content = content.replace(/Water Supply.*?Treatment Plants.*?Irrigation/g, 'Water Supply • Treatment Plants • Irrigation');
content = content.replace(/Geotechnical Engineering.*?Retaining Structures.*?Rock-fall Protection/g, 'Geotechnical Engineering • Retaining Structures • Rock-fall Protection');
content = content.replace(/Water Retaining Structures.*?Water Towers.*?Steel Fabrication/g, 'Water Retaining Structures • Water Towers • Steel Fabrication');
content = content.replace(/Formation.*?Civil Infrastructure.*?Track Upgradation/g, 'Formation • Civil Infrastructure • Track Upgradation');

content = content.replace(/coastline.*?fishery harbours/g, 'coastline - fishery harbours');
content = content.replace(/hill-country zones.*?soil nailing/g, 'hill-country zones - soil nailing');
content = content.replace(/projects.*?earthworks/g, 'projects - earthworks');

fs.writeFileSync('src/app/services/page.tsx', content, 'utf8');
