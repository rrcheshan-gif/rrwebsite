const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<body suppressHydrationWarning>',
  '<body className={`${playfair.variable} ${roboto.variable} antialiased`} suppressHydrationWarning>'
);
content = content.replace(
  '<body>',
  '<body className={`${playfair.variable} ${roboto.variable} antialiased`}>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed body tag');
