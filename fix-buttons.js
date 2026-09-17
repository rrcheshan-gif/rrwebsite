const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        getFiles(filePath, files);
      }
    } else if (filePath.endsWith('.tsx')) {
      files.push(filePath);
    }
  }
  return files;
}

const files = getFiles('src/app');
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Extract link info
  const linkRegex = /<Link\s+href="([^"]+)"[^>]*>[\s\n]*&larr;\s*(Back to [^<]+)[\s\n]*<\/Link>/i;
  const match = content.match(linkRegex);
  if (!match) return;
  const href = match[1];
  const text = match[2];
  let originalContent = content;
  
  // Clean up all existing variations of the back button
  content = content.replace(/<div[^>]*className="absolute-back-btn"[^>]*>[\s\S]*?<\/div>\s*/g, '');
  content = content.replace(/<div[^>]*>\s*<Link\s+href="[^"]+"[^>]*>[\s\n]*&larr;\s*Back to [^<]+[\s\n]*<\/Link>\s*<\/div>\s*/gi, '');
  content = content.replace(/<Link\s+href="[^"]+"[^>]*>[\s\n]*&larr;\s*Back to [^<]+[\s\n]*<\/Link>\s*/gi, '');
  content = content.replace(/<div[^>]*style={{[^}]*position:\s*['"]absolute['"][^}]*}}[^>]*>\s*<Link[\s\S]*?<\/Link>\s*<\/div>\s*/gi, '');

  // Inject at the very top of page-header
  const headerRegex = /(<section[^>]*className="page-header"[^>]*>)/i;
  if (headerRegex.test(content)) {
    const standardizedButton = `\n        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>\n          <Link href="${href}" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; ${text}</Link>\n        </div>`;
    content = content.replace(headerRegex, `$1${standardizedButton}`);
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated ' + file);
      count++;
    }
  }
});
console.log('Total updated: ' + count);
