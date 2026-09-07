const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace('import { , Mountain } from "lucide-react";', 'import { ArrowRight, Map, GitMerge, Building2, Waves, Leaf, HardHat, Anchor, Droplets, MapPin, Clock, Mountain } from "lucide-react";');

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed imports');
