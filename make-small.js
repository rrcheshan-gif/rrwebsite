const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Change grid to allow smaller items (e.g. 5 columns on desktop)
content = content.replace(
  'gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))"',
  'gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"'
);

// Remove the full-width override for the 5th item and reduce height
content = content.replace(
  'gridColumn: i === 4 ? "1 / -1" : "auto", minHeight: "300px"',
  'minHeight: "260px"'
);

// Reduce height for other cards if they weren't matched above
content = content.replace(
  /minHeight: "300px"/g,
  'minHeight: "260px"'
);

// Reduce padding inside the overlay for the smaller cards
content = content.replace(
  'padding: "30px", background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 80%, transparent)"',
  'padding: "25px", background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 80%, transparent)"'
);

// Scale down the fonts slightly for smaller cards
content = content.replace(
  'fontSize: "clamp(1.6rem, 5vw, 2.2rem)"',
  'fontSize: "clamp(1.2rem, 3vw, 1.5rem)"'
);
content = content.replace(
  'fontSize: "1rem"',
  'fontSize: "0.85rem"'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Made cards small and fit 5 per row');
