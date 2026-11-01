const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

function img(rel) {
  const full = path.join(__dirname, 'public', rel);
  if (!fs.existsSync(full)) { console.warn('Missing image:', full); return ''; }
  const ext = path.extname(full).toLowerCase().replace('.', '');
  const mime = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
  return `data:${mime};base64,${fs.readFileSync(full).toString('base64')}`;
}

const I = {
  logo: img('images/logo.png'),
  road: img('images/home/rathnapura.jpg'),
  marine: img('images/IMAGES/Gandara/gandara-bg.jpeg'),
  bridge: img('images/IMAGES/Mahanama Bridge/Background image.jpeg'),
  landslide: img('images/IMAGES/LDPP/New folder/Gemini_Generated_Image_l3clfrl3clfrl3cl.jpg'),
  rail: img('images/projects/new-folder/maho-railway/Background image.jpg'),
  machinery: img('images/home/slider-machinery-new.jpg'),
  piling: img('images/home/piling-service-card.jpg'),
  water: img('images/services/watermaster.webp'),
};

const photo = (src, cap) => `
  <div class="ph"><img src="${src}"/><div class="cap">${cap}</div></div>`;

const html = `<!DOCTYPE html><html><head><meta charset="utf-8"/>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:827px;height:1170px;font-family:'Outfit','Segoe UI',Arial,sans-serif;background:#fff;overflow:hidden}
.flyer{width:827px;height:1170px;display:flex;flex-direction:column}
.head{background:#fff;height:128px;padding:0 34px;display:flex;align-items:center;justify-content:space-between;border-bottom:6px solid #D32F2F}
.brand{display:flex;align-items:flex-end;gap:10px}
.brand img{height:96px;display:block;margin-bottom:4.1px}
.brand .t{position:relative;height:58.4px;width:230px;margin-bottom:4.1px}
.brand .t b{position:absolute;left:0;top:-6.7px;font-family:'Times New Roman',serif;font-size:38.4px;line-height:1;color:#D32F2F;font-weight:700;white-space:nowrap}
.brand .t span{position:absolute;left:0;bottom:.2px;font-family:'Times New Roman',serif;font-size:15.8px;line-height:1;letter-spacing:4px;color:#D32F2F;font-weight:700;white-space:nowrap}
.iso{text-align:right}
.iso .l1{font-size:10px;letter-spacing:2px;font-weight:800;color:#D32F2F;text-transform:uppercase;white-space:nowrap}
.iso .l2{font-size:12px;font-weight:700;color:#0f172a;margin-top:4px}
.iso .l3{font-size:11px;font-weight:600;color:#64748b;margin-top:2px}
.body{flex:1;min-height:0;overflow:hidden;background:linear-gradient(160deg,#D32F2F 0%,#a31d1d 100%);padding:18px 26px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(3,minmax(0,1fr));gap:12px;position:relative}
.ph{background:#fff;padding:4px;border-radius:6px;display:flex;flex-direction:column;box-shadow:0 6px 16px rgba(0,0,0,.3);overflow:hidden;min-height:0}
.ph img{width:100%;height:0;flex:1;min-height:0;object-fit:cover;border-radius:3px;display:block}
.cap{font-size:11.5px;font-weight:800;color:#0f172a;text-align:center;padding:5px 2px 2px;text-transform:uppercase;letter-spacing:.4px}
.list{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;text-align:right;color:#fff}
.list .h{font-size:11px;letter-spacing:3px;font-weight:800;color:#fecaca;text-transform:uppercase;margin-bottom:8px}
.list div.i{font-size:13px;font-weight:800;line-height:1.2;padding:3.5px 0;border-bottom:1px solid rgba(255,255,255,.25);width:100%}
.list .bar{width:60px;height:4px;background:#fff;margin:10px 0 0 auto;border-radius:2px}
.foot{background:#ffffff;border-top:6px solid #D32F2F;padding:18px 34px 16px;color:#0f172a}
.stats{display:flex;justify-content:space-between;border-bottom:1px solid #e2e8f0;padding-bottom:12px;margin-bottom:14px}
.stats div{text-align:center}
.stats b{display:block;font-size:26px;font-weight:900;color:#D32F2F;line-height:1}
.stats span{font-size:10px;letter-spacing:1.5px;font-weight:700;color:#64748b;text-transform:uppercase}
.cols{display:grid;grid-template-columns:1.15fr 1fr;gap:26px}
.tag{display:inline-block;background:#D32F2F;color:#fff;font-weight:800;font-size:15px;padding:4px 16px 4px 12px;clip-path:polygon(0 0,100% 0,88% 100%,0 100%);margin-bottom:8px;letter-spacing:1px}
.addr{font-size:14px;font-weight:600;line-height:1.5;color:#334155}
.addr b{color:#D32F2F;font-weight:800}
.bottom-bar{margin-top:14px;padding-top:12px;border-top:1px solid #e2e8f0;display:flex;align-items:center;justify-content:center;gap:30px}
.b-item{display:inline-flex;align-items:center;gap:8px;font-size:14.5px;font-weight:800;letter-spacing:1.2px;text-decoration:none}
.b-item.web{color:#D32F2F}
.b-item.fb{color:#0f172a}
.b-item svg{display:block;flex-shrink:0}
.b-sep{width:1px;height:16px;background:#cbd5e1}
</style></head><body><div class="flyer">

<div class="head">
  <div class="brand"><img src="${I.logo}"/><div class="t"><b>Construction</b><span>(Pvt) Ltd</span></div></div>
  <div class="iso">
    <div class="l1">Passion For Engineering Excellence</div>
    <div class="l2">ISO 9001 &bull; ISO 14001 &bull; ISO 45001</div>
    <div class="l3">CIDA Grade CS2 &bull; Est. 1995</div>
  </div>
</div>

<div class="body">
  ${photo(I.road, 'Transportation &amp; Roads')}
  ${photo(I.marine, 'Marine &amp; Harbour')}
  ${photo(I.bridge, 'Bridge Construction')}
  ${photo(I.landslide, 'Slope Stabilization')}
  ${photo(I.rail, 'Railway Civil Works')}
  <div class="list">
    <div class="h">Our Services</div>
    <div class="i">Transportation &amp; Civil Infrastructure</div>
    <div class="i">Marine &amp; Harbour Construction</div>
    <div class="i">Slope Stabilization &amp; Landslide Mitigation</div>
    <div class="i">Piling &amp; Foundation Engineering</div>
    <div class="i">Dredging &amp; Water Infrastructure</div>
    <div class="i">Railway Civil Works</div>
    <div class="i">Research &amp; Development</div>
    <div class="bar"></div>
  </div>
  ${photo(I.machinery, 'Heavy Machinery Fleet')}
  ${photo(I.piling, 'Piling &amp; Foundation')}
  ${photo(I.water, 'Dredging &amp; Water Infrastructure')}
</div>

<div class="foot">
  <div class="cols">
    <div>
      <div class="tag">OFFICE</div>
      <div class="addr">No. 865, Dr. Danister de Silva Mawatha, Baseline Road, Orugodawatta, Colombo 09.<br/>
      <b>Tel:</b> 011 243 3427 &nbsp;|&nbsp; <b>Fax:</b> 011 243 0161<br/>
      <b>E-mail:</b> general@rrconstruction.lk</div>
    </div>
    <div>
      <div class="tag">WORKSHOP</div>
      <div class="addr">No. 626C, Samurdhi Mawatha, Cheenagahawela, Heiyanthuduwa, Sapugaskanda.<br/>
      <b>Tel:</b> 011 240 1201<br/>
      <b>E-mail:</b> rrcworkshop@sltnet.lk</div>
    </div>
  </div>
  <div class="bottom-bar">
    <div class="b-item web">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      <span>www.rrconstruction.lk</span>
    </div>
    <div class="b-sep"></div>
    <div class="b-item fb">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      <span>RR Construction (Pvt) Ltd</span>
    </div>
  </div>
</div>

</div></body></html>`;

(async () => {
  const tmp = path.join(__dirname, 'flyer_temp.html');
  fs.writeFileSync(tmp, html);
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 827, height: 1170, deviceScaleFactor: 2.5 });
  await page.goto('file:///' + tmp.replace(/\\/g, '/'), { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1500));
  const out = path.join(__dirname, 'public', 'RR-Construction-Flyer.jpg');
  await page.screenshot({ path: out, type: 'jpeg', quality: 95 });
  await browser.close();
  fs.unlinkSync(tmp);
  console.log('Flyer generated:', out);

  const desktop = 'C:/Users/hesha/Desktop/RR-Construction-Flyer.jpg';
  fs.copyFileSync(out, desktop);
  console.log('Copied to Desktop:', desktop);

  const artifact = 'C:/Users/hesha/.gemini/antigravity/brain/9fc826a5-7a53-46d9-a5da-0f16317973aa/RR-Construction-Flyer.jpg';
  fs.copyFileSync(out, artifact);
  console.log('Copied to Artifacts:', artifact);
})();




