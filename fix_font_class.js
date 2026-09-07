const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');
c = c.replace('${montserrat.variable} ${inter.variable}', '${spaceGrotesk.variable} ${dmSans.variable}');
fs.writeFileSync('src/app/layout.tsx', c, 'utf8');
console.log("Updated className");
