const fs = require('fs');

let sand = fs.readFileSync('src/app/resources/sand/page.tsx', 'utf8');
sand = sand.replace('export default function Sand&M-SandPage()', 'export default function SandPage()');
fs.writeFileSync('src/app/resources/sand/page.tsx', sand, 'utf8');

let concrete = fs.readFileSync('src/app/resources/concrete/page.tsx', 'utf8');
concrete = concrete.replace('export default function Ready-MixConcretePage()', 'export default function ConcretePage()');
fs.writeFileSync('src/app/resources/concrete/page.tsx', concrete, 'utf8');

let crusher = fs.readFileSync('src/app/resources/crusher/page.tsx', 'utf8');
crusher = crusher.replace('export default function CrusherPlantsPage()', 'export default function CrusherPage()');
fs.writeFileSync('src/app/resources/crusher/page.tsx', crusher, 'utf8');

console.log('Fixed function names');
