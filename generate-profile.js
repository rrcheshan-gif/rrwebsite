const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const logoPath = `file:///${path.join(publicDir, 'images', 'logo.png').replace(/\\/g, '/')}`;

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>RR Construction - Company Profile</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Open+Sans:wght@400;600&display=swap');
    
    * { box-sizing: border-box; }
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      color: #333;
      background: #f8f9fa;
      -webkit-print-color-adjust: exact;
    }
    
    .page {
      width: 210mm;
      height: 297mm;
      page-break-after: always;
      position: relative;
      background: white;
      overflow: hidden;
    }
    
    .cover-page {
      background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40mm 20mm;
    }
    
    .cover-logo img {
      width: 150px;
      margin-bottom: 20px;
    }
    
    .cover-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 50pt;
      font-weight: 800;
      line-height: 1.1;
      margin: 0;
      color: #E53935;
    }
    
    .cover-subtitle {
      font-family: 'Montserrat', sans-serif;
      font-size: 20pt;
      font-weight: 600;
      margin-top: 10px;
      color: #ccc;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    
    .cover-footer {
      border-top: 2px solid #E53935;
      padding-top: 20px;
    }
    
    .cover-footer h3 {
      font-family: 'Montserrat', sans-serif;
      margin: 0;
      font-size: 16pt;
    }
    
    .cover-footer p {
      margin: 5px 0 0;
      color: #aaa;
      font-size: 12pt;
    }

    /* Content Pages */
    .content-page {
      padding: 20mm;
    }
    
    h1, h2, h3 {
      font-family: 'Montserrat', sans-serif;
      color: #111827;
    }
    
    .section-title {
      font-size: 28pt;
      font-weight: 800;
      color: #E53935;
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 4px solid #E53935;
      display: inline-block;
    }
    
    p {
      font-size: 11pt;
      line-height: 1.8;
      margin-bottom: 15px;
      color: #4b5563;
    }
    
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    
    .box {
      background: #f1f5f9;
      padding: 20px;
      border-radius: 10px;
      border-left: 5px solid #E53935;
    }
    
    .box h3 {
      margin-top: 0;
      color: #E53935;
      font-size: 14pt;
    }

    .stat-row {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      margin-bottom: 40px;
    }
    
    .stat-item {
      text-align: center;
      background: #111827;
      color: white;
      padding: 20px;
      border-radius: 12px;
      flex: 1;
      margin: 0 10px;
    }
    
    .stat-item h2 {
      color: #E53935;
      font-size: 24pt;
      margin: 0;
    }
    
    .stat-item p {
      color: #ccc;
      margin: 5px 0 0;
      font-size: 10pt;
      text-transform: uppercase;
      font-weight: bold;
    }
    
    ul {
      padding-left: 20px;
      color: #4b5563;
      font-size: 11pt;
      line-height: 1.8;
    }
    
    li {
      margin-bottom: 10px;
    }
    
    .page-footer {
      position: absolute;
      bottom: 10mm;
      left: 20mm;
      right: 20mm;
      border-top: 1px solid #ddd;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 9pt;
      color: #888;
    }
    
  </style>
</head>
<body>

  <!-- PAGE 1: COVER -->
  <div class="page cover-page">
    <div>
      <div class="cover-logo">
        <img src="${logoPath}" alt="RR Construction">
      </div>
      <h1 class="cover-title">CORPORATE<br>PROFILE</h1>
      <div class="cover-subtitle">Building The Future Of Sri Lanka</div>
    </div>
    
    <div class="cover-footer">
      <h3>RR CONSTRUCTION (PVT) LTD</h3>
      <p>30+ Years of Engineering Excellence • ISO 9001 • ISO 14001 • ISO 45001</p>
    </div>
  </div>

  <!-- PAGE 2: ABOUT US -->
  <div class="page content-page">
    <h2 class="section-title">About Us</h2>
    <p>Established in 1995, RR Construction (Pvt) Ltd has grown to become a definitive benchmark for civil engineering excellence and infrastructure development in Sri Lanka. With over three decades of experience, we specialize in delivering large-scale, complex infrastructure projects across the nation.</p>
    
    <div class="stat-row">
      <div class="stat-item">
        <h2>30+</h2>
        <p>Years Experience</p>
      </div>
      <div class="stat-item">
        <h2>1,800+</h2>
        <p>Workforce</p>
      </div>
      <div class="stat-item">
        <h2>100+</h2>
        <p>Completed Projects</p>
      </div>
    </div>
    
    <div class="grid-2">
      <div class="box">
        <h3>Our Vision</h3>
        <p>To establish RR Construction as the definitive benchmark for civil engineering excellence and infrastructure development in Sri Lanka.</p>
      </div>
      <div class="box">
        <h3>Our Mission</h3>
        <p>To deliver outstanding engineering solutions through continuous improvement, resource optimization, and a commitment to our core stakeholders.</p>
      </div>
    </div>
    
    <h3 style="margin-top: 30px; font-size: 18pt; color: #111827;">Our Core Values</h3>
    <ul>
      <li><strong>Engineering Excellence:</strong> Striving for technical superiority in every project.</li>
      <li><strong>Integrity & Transparency:</strong> Conducting our business with absolute honesty.</li>
      <li><strong>Quality:</strong> Uncompromising commitment to ISO 9001 standards.</li>
      <li><strong>Safety First:</strong> Fostering a 'Zero Harm' culture under ISO 45001.</li>
      <li><strong>Sustainability:</strong> Integrating ISO 14001 environmental practices into our operations.</li>
      <li><strong>Teamwork:</strong> Collaboration is our strength among our 1,800 employees.</li>
    </ul>
    
    <div class="page-footer">
      <span>RR Construction (Pvt) Ltd</span>
      <span>Page 2</span>
    </div>
  </div>

  <!-- PAGE 3: SERVICES & SECTORS -->
  <div class="page content-page">
    <h2 class="section-title">Core Expertise</h2>
    <p>We leverage a massive self-owned machinery fleet of over 1,000 units and a dedicated workforce of highly skilled professionals to execute specialized projects.</p>
    
    <div style="display: flex; flex-direction: column; gap: 15px;">
      <div class="box" style="border-left-color: #3b82f6;">
        <h3 style="color: #3b82f6;">Roads & Highways</h3>
        <p>Comprehensive rehabilitation and improvement of provincial and national roads, advanced asphalt laying, and sustainable transport infrastructure.</p>
      </div>
      <div class="box" style="border-left-color: #06b6d4;">
        <h3 style="color: #06b6d4;">Maritime & Dredging</h3>
        <p>Expertise in constructing fishery harbours, boat launching ramps, deep-water dredging, and coastal reclamation in challenging marine environments.</p>
      </div>
      <div class="box" style="border-left-color: #10b981;">
        <h3 style="color: #10b981;">Water & Irrigation</h3>
        <p>Developing extensive pipeline networks, high-capacity water treatment units, and sustainable irrigation solutions for regional communities.</p>
      </div>
      <div class="box" style="border-left-color: #f59e0b;">
        <h3 style="color: #f59e0b;">Landslide Mitigation</h3>
        <p>Specialized geotechnical engineering to stabilize vulnerable slopes, build complex retaining walls, and protect communities from natural disasters.</p>
      </div>
    </div>
    
    <h3 style="margin-top: 30px; font-size: 16pt;">Manufacturing & Material Supply</h3>
    <p>To ensure uncompromising quality and timely delivery, we vertically integrate our operations through self-owned production facilities:</p>
    <ul>
      <li><strong>Asphalt Plants:</strong> Producing thousands of metric tons for nationwide road projects.</li>
      <li><strong>M-Sand Production:</strong> High-grade manufactured sand as an eco-friendly alternative.</li>
      <li><strong>Quarries & Aggregates:</strong> Providing essential raw materials from multiple strategic locations.</li>
    </ul>

    <div class="page-footer">
      <span>RR Construction (Pvt) Ltd</span>
      <span>Page 3</span>
    </div>
  </div>

  <!-- PAGE 4: LEADERSHIP & CONTACT -->
  <div class="page content-page">
    <h2 class="section-title">Leadership</h2>
    <div class="grid-2">
      <div class="box">
        <h3>Mr. Ranjith Senadheera S.D.</h3>
        <p><strong>Managing Director</strong><br>B.Sc. Engineering (Hons), M.Eng. (IEM)</p>
      </div>
      <div class="box">
        <h3>Mr. Ajith Priyantha Galahitiyawa</h3>
        <p><strong>General Manager - Contracts</strong><br>B.Sc. Engineering, Chartered Engineer</p>
      </div>
      <div class="box">
        <h3>Mr. S.R. Gamage</h3>
        <p><strong>General Manager - Operations</strong><br>Diploma in Engineering (NDT), CEI Part 1 & 2</p>
      </div>
    </div>
    
    <h2 class="section-title" style="margin-top: 40px;">Get In Touch</h2>
    <div style="background: #111827; color: white; padding: 30px; border-radius: 15px; margin-top: 10px;">
      <h3 style="color: #E53935; margin-top: 0; font-size: 16pt;">RR Construction (Pvt) Ltd</h3>
      <p style="color: #ccc; margin-bottom: 5px;"><strong>CIDA Registration:</strong> C-10171</p>
      <p style="color: #ccc; margin-bottom: 5px;"><strong>Location:</strong> Sri Lanka</p>
      <p style="color: #ccc; margin-bottom: 5px;"><strong>Email:</strong> info@rrconstruction.lk</p>
      <p style="color: #ccc; margin-bottom: 0;"><strong>Website:</strong> www.rrconstruction.lk</p>
    </div>
    
    <div class="page-footer">
      <span>RR Construction (Pvt) Ltd</span>
      <span>Page 4</span>
    </div>
  </div>

</body>
</html>
`;

async function generatePDF() {
  console.log("Saving HTML template...");
  fs.writeFileSync('temp_profile.html', htmlContent);

  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({
    headless: "new"
  });
  
  const page = await browser.newPage();
  
  console.log("Loading HTML...");
  await page.goto('file://' + path.resolve('temp_profile.html'), { waitUntil: 'networkidle0' });
  
  const artifactsDir = 'C:\\Users\\hesha\\.gemini\\antigravity\\brain\\9fc826a5-7a53-46d9-a5da-0f16317973aa';
  const outPath = path.join(artifactsDir, 'RR_Construction_Corporate_Profile.pdf');
  
  console.log("Generating PDF...");
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  
  // Clean up
  fs.unlinkSync('temp_profile.html');
  
  console.log('PDF generated successfully at:', outPath);
}

generatePDF().catch(console.error);
