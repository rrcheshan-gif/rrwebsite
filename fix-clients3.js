const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /\{\[\s*\{\s*name:\s*"ROAD DEVELOPMENT AUTHORITY"\s*\},\s*\{\s*name:\s*"NATIONAL WATER BOARD"\s*\},\s*\{\s*name:\s*"U.D.A. SRI LANKA"\s*\},\s*\{\s*name:\s*"MINISTRY OF IRRIGATION"\s*\},\s*\{\s*name:\s*"IRCON INTERNATIONAL"\s*\}\s*\]\.map\(\(client,\s*idx\)\s*=>\s*\(\s*<div[^>]+>([\s\S]*?)<\/span>\s*<\/div>/;

const newBlock = "{[\n" +
"  { name: 'ROAD DEVELOPMENT AUTHORITY', logo: '/images/clients/rda.png' },\n" +
"  { name: 'NATIONAL WATER BOARD', logo: '/images/clients/nwsdb.png' },\n" +
"  { name: 'U.D.A. SRI LANKA', logo: '/images/clients/uda.png' },\n" +
"  { name: 'MINISTRY OF IRRIGATION', logo: '/images/clients/irrigation.png' },\n" +
"  { name: 'IRCON INTERNATIONAL', logo: '/images/clients/ircon.png' }\n" +
"].map((client, idx) => (\n" +
"  <div \n" +
"    key={idx} \n" +
"    className='glass-panel hover-lift' \n" +
"    style={{ \n" +
"      padding: '8px 20px 8px 10px', \n" +
"      borderRadius: '50px', \n" +
"      border: '1px solid var(--border-soft)', \n" +
"      background: 'white',\n" +
"      display: 'flex', \n" +
"      alignItems: 'center', \n" +
"      gap: '10px' \n" +
"    }}\n" +
"  >\n" +
"    <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n" +
"      <img src={client.logo} alt={client.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />\n" +
"    </div>\n" +
"    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)', letterSpacing: '0.5px' }}>\n" +
"      {client.name}\n" +
"    </span>\n" +
"  </div>";

content = content.replace(regex, newBlock);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated clients with logos');
