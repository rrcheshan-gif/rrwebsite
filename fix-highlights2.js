const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /\{\[\s*\{\s*icon:\s*<Anchor[^>]+>,\s*title:\s*"Gandara Fishery Harbour"[^\}]+\},\s*\{\s*icon:\s*<MapPin[^>]+>,\s*title:\s*"Central Expressway"[^\}]+\},\s*\{\s*icon:\s*<Droplets[^>]+>,\s*title:\s*"Ampara Water Treatment Plant"[^\}]+\}\s*\]/;

const newArray = '{[\n                 { icon: <Anchor color="white" size={24} />, title: "Wellamankara Fishery Harbor", text: "Major maritime development", num: "01" },\n                 { icon: <Anchor color="white" size={24} />, title: "Gandara Fishery Harbour", text: "Major maritime development", num: "02" },\n                 { icon: <GitMerge color="white" size={24} />, title: "Matara Mahanama Bridge", text: "116.4m Strategic crossing", num: "03" }\n               ]';

content = content.replace(regex, newArray);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated Project Highlights array');
