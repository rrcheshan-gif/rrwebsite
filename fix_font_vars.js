const fs = require('fs');
let c = fs.readFileSync('src/app/layout.tsx', 'utf8');

c = c.replace(/const spaceGrotesk = Space_Grotesk\(\{[\s\S]*?\}\);/, 
`const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});`);

c = c.replace(/const dmSans = DM_Sans\(\{[\s\S]*?\}\);/,
`const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});`);

c = c.replace(/className=\{`\$\{spaceGrotesk\.variable\} \$\{dmSans\.variable\}`\}/, 'className={`${sora.variable} ${inter.variable}`}');

fs.writeFileSync('src/app/layout.tsx', c, 'utf8');
console.log("Updated font variables");
