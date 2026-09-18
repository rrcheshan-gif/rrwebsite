const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace font imports
content = content.replace(
  'import { Montserrat, Open_Sans } from "next/font/google";',
  'import { Manrope } from "next/font/google";'
);

// Replace font definitions
const oldFonts = `const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});`;

const newFonts = `const manropeHeading = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manropeBody = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});`;

content = content.replace(oldFonts, newFonts);

// Replace class names
content = content.replace(
  /\className=\{`\$\{montserrat\.variable\} \$\{openSans\.variable\}`\}/g,
  'className={`${manropeHeading.variable} ${manropeBody.variable}`}'
);
content = content.replace(
  /\className=\{`\$\{montserrat\.variable\} \$\{openSans\.variable\} antialiased`\}/g,
  'className={`${manropeHeading.variable} ${manropeBody.variable} antialiased`}'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated font to Manrope globally in layout.tsx');
