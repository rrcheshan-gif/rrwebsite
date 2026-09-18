const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace imports
content = content.replace(
  'import { Roboto } from "next/font/google";',
  'import { Montserrat, Open_Sans } from "next/font/google";'
);

// We might have 'import { Playfair_Display, Roboto }' or similar depending on previous changes
content = content.replace(
  /import \{ .* \} from "next\/font\/google";/,
  'import { Montserrat, Open_Sans } from "next/font/google";'
);

// Replace font definitions
const oldFontsRegex = /const robotoHeading = Roboto\(\{[\s\S]*?\}\);\s*const roboto = Roboto\(\{[\s\S]*?\}\);/;
const newFonts = `const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});`;

content = content.replace(oldFontsRegex, newFonts);

// Replace className string
content = content.replace(
  /className=\{`\$\{robotoHeading\.variable\} \$\{roboto\.variable\} antialiased`\}/,
  'className={`${montserrat.variable} ${openSans.variable} antialiased`}'
);
content = content.replace(
  /className=\{`\$\{robotoHeading\.variable\} \$\{roboto\.variable\}`\}/,
  'className={`${montserrat.variable} ${openSans.variable}`}'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated to Montserrat and Open Sans');
