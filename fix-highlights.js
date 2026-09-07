const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldArray = \               {[
                 { icon: <Anchor color="white" size={24} />, title: "Gandara Fishery Harbour", text: "Major maritime development", num: "01" },
                 { icon: <MapPin color="white" size={24} />, title: "Central Expressway", text: "Section 2 Package-A", num: "02" },
                 { icon: <Droplets color="white" size={24} />, title: "Ampara Water Treatment Plant", text: "172,000 cum/day capacity", num: "03" }
               ]\;

const newArray = \               {[
                 { icon: <Anchor color="white" size={24} />, title: "Wellamankara Fishery Harbour", text: "Major maritime development", num: "01" },
                 { icon: <Anchor color="white" size={24} />, title: "Gandara Fishery Harbour", text: "Major maritime development", num: "02" },
                 { icon: <GitMerge color="white" size={24} />, title: "Matara Mahanama Bridge", text: "116.4m Strategic crossing", num: "03" }
               ]\;

content = content.replace(oldArray, newArray);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated Project Highlights array');
