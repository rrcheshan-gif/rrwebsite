const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Replace imports
c = c.replace(
  'import { Sora, Inter } from "next/font/google";',
  'import { Rajdhani, Roboto } from "next/font/google";'
);

// Replace font initializations
c = c.replace(
  /const sora = Sora\(\{[\s\S]*?\}\);/, 
  `const rajdhani = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});`
);

c = c.replace(
  /const inter = Inter\(\{[\s\S]*?\}\);/,
  `const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});`
);

// Replace in HTML tag
c = c.replace(
  'className={`${sora.variable} ${inter.variable}`}',
  'className={`${rajdhani.variable} ${roboto.variable}`}'
);

fs.writeFileSync('src/app/layout.tsx', c, 'utf8');
console.log("Fonts changed successfully to Rajdhani and Roboto");
