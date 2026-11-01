const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
  const code = fs.readFileSync('generate_souvenir.js', 'utf8');
  const regex = /getImgUrl\(['"]([^'"]+)['"]\)/g;
  let match;
  const list = [];
  const seen = new Set();
  while ((match = regex.exec(code)) !== null) {
    const rel = match[1];
    if (seen.has(rel)) continue;
    seen.add(rel);

    const safeName = rel.replace(/[\/\\]/g, '_').replace(/ /g, '_');
    const lastDot = safeName.lastIndexOf('.');
    const baseName = lastDot !== -1 ? safeName.substring(0, lastDot) : safeName;
    const optJpg = path.join(__dirname, 'souvenir_optimized_assets', baseName + '.jpg');
    const optPng = path.join(__dirname, 'souvenir_optimized_assets', baseName + '.png');
    const optOrig = path.join(__dirname, 'souvenir_optimized_assets', safeName);

    let full = path.join(__dirname, 'public', rel);
    let srcType = 'raw public';
    if (fs.existsSync(optJpg)) { full = optJpg; srcType = 'opt jpg'; }
    else if (fs.existsSync(optPng)) { full = optPng; srcType = 'opt png'; }
    else if (fs.existsSync(optOrig)) { full = optOrig; srcType = 'opt orig'; }

    if (fs.existsSync(full)) {
      try {
        const meta = await sharp(full).metadata();
        list.push({ rel, width: meta.width, height: meta.height, size: fs.statSync(full).size, srcType });
      } catch(e) {}
    }
  }

  list.sort((a,b) => (b.width * b.height) - (a.width * a.height));
  console.log('Top 20 largest pixel dimensions:');
  list.slice(0, 20).forEach((item, i) => {
    console.log((i+1) + '. ' + item.width + 'x' + item.height + ' (' + Math.round(item.size/1024) + ' KB) [' + item.srcType + '] -> ' + item.rel);
  });
})();
