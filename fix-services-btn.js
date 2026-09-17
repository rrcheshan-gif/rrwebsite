const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr =         <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1.5px',  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '28px' }}>
            Home
          </Link>;

const replaceStr =         <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: '100%', textAlign: 'left', marginBottom: '24px' }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Home
            </Link>
          </div>;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replaceStr);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Replaced successfully exactly!');
} else {
    console.log('Target string not found directly. Trying regex...');
    const regex = /<div style=\{\{ maxWidth: '1100px'[\s\S]*?Home\s*<\/Link>/;
    if (regex.test(content)) {
        content = content.replace(regex, replaceStr);
        fs.writeFileSync(file, content, 'utf8');
        console.log('Replaced via regex!');
    } else {
        console.log('Failed to find anything to replace.');
    }
}
