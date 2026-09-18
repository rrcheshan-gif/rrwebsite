const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace playfair with roboto for headings as well, or just load Roboto with more weights
const oldFonts = `const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});`;

const newFonts = `const robotoHeading = Roboto({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});`;

content = content.replace(oldFonts, newFonts);
content = content.replace('Playfair_Display, Roboto', 'Roboto');
content = content.replace('Playfair_Display', 'Roboto'); // in case

content = content.replace(
  'className={`${playfair.variable} ${roboto.variable} antialiased`}',
  'className={`${robotoHeading.variable} ${roboto.variable} antialiased`}'
);
content = content.replace(
  'className={`${playfair.variable} ${roboto.variable}`}',
  'className={`${robotoHeading.variable} ${roboto.variable}`}'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated to full Roboto');
