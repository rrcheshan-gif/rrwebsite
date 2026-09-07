const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/environmental-stewardship/page.tsx', 'utf8');

const old1 = 'With an internal fleet of {COMPANY_DATA.machineryFleet} machines and heavy vehicles, we enforce strict fleet maintenance to optimize fuel burn. High-pressure water sprinkling systems and advanced dust collectors are deployed at our concrete and asphalt batching plants in Thudugala, Veerapuram, Omanthai, and Yakawewa to eliminate airborne particulate matter.';
const new1 = 'Operating an expansive fleet of over {COMPANY_DATA.machineryFleet} heavy machines demands rigorous emissions oversight. We enforce stringent, data-driven fleet maintenance protocols to aggressively optimize fuel efficiency and reduce our carbon footprint. Furthermore, advanced high-pressure water suppression systems and state-of-the-art industrial dust collectors are integrated into our concrete and asphalt batching plants across Thudugala, Veerapuram, Omanthai, and Yakawewa, effectively neutralizing airborne particulate matter and preserving local air quality.';

const old2 = 'During massive irrigation works like the Kalmadu Scheme and maritime dredging in Negombo and Gandara, strict silt screens and sediment traps are used. We ensure our earthworks do not contaminate local water tables or disrupt coastal marine habitats.';
const new2 = 'Preserving aquatic ecosystems is a cornerstone of our heavy civil engineering methodology. During massive hydraulic and irrigation operations—such as the Kalmadu Scheme—and deep maritime dredging projects in Negombo and Gandara, we deploy industrial-grade silt screens and advanced sediment containment traps. These rigorous hydrological safeguards guarantee that our earthworks never contaminate fragile local water tables or disrupt vulnerable coastal marine habitats.';

const old3 = 'By operating our own crusher plants and manufacturing our own M-Sand, we bypass the environmentally destructive river sand mining practices. We heavily recycle asphalt pavement (RAP) and employ controlled rock blasting techniques to maximize resource yields while minimizing topographical scarring.';
const new3 = 'We pioneer sustainable resource engineering by operating proprietary crusher plants and manufacturing high-strength Manufactured Sand (M-Sand), systematically bypassing environmentally destructive river sand mining. We aggressively integrate Reclaimed Asphalt Pavement (RAP) into our supply chains and execute precision-controlled rock blasting techniques. This methodology maximizes structural material yields while drastically minimizing topographical scarring and ecological degradation.';

content = content.replace(old1, new1).replace(old2, new2).replace(old3, new3);
fs.writeFileSync('src/app/sustainability/environmental-stewardship/page.tsx', content, 'utf8');
console.log('Updated Environmental details');
