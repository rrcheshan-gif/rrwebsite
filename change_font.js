const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Replace imports
c = c.replace(
  'import { Space_Grotesk, DM_Sans } from "next/font/google";',
  'import { Sora, Inter } from "next/font/google";'
);

// Replace font initializations
c = c.replace(
  `const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});`,
  `const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});`
);

c = c.replace(
  `const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});`,
  `const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});`
);

// Replace in HTML tag
c = c.replace(
  'className={`${spaceGrotesk.variable} ${dmSans.variable}`}',
  'className={`${sora.variable} ${inter.variable}`}'
);

fs.writeFileSync('src/app/layout.tsx', c, 'utf8');
console.log("Fonts changed successfully to Sora and Inter");
