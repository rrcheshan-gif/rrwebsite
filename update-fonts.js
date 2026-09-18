const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace imports
content = content.replace(
  'import { Outfit, Manrope } from "next/font/google";',
  'import { Playfair_Display, Roboto } from "next/font/google";'
);

// Replace font instances
const oldFonts = `const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});`;

const newFonts = `const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});`;

content = content.replace(oldFonts, newFonts);

// Replace class names in the body tag
content = content.replace(
  '<body className={`${outfit.variable} ${manrope.variable} antialiased`}>',
  '<body className={`${playfair.variable} ${roboto.variable} antialiased`}>'
);
content = content.replace(
  '<body className={`${outfit.variable} ${manrope.variable} antialiased suppressHydrationWarning`}>',
  '<body className={`${playfair.variable} ${roboto.variable} antialiased`} suppressHydrationWarning>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated fonts in layout.tsx');
