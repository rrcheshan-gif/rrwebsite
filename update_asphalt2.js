const fs = require('fs');
let content = fs.readFileSync('src/app/resources/asphalt/page.tsx', 'utf8');

const regex = /\{\/\* Photo Gallery \*\/\}\s*<section style=\{\{ padding: "20px 20px 80px", backgroundColor: "var\(--white\)" \}\}>\s*<div className="container" style=\{\{ maxWidth: "1500px", margin: "0 auto" \}\}>\s*<div className="img-polish glass-panel" style=\{\{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 50px rgba\(0,0,0,0\.15\)" \}\}>\s*<img className="img-polished img-hover-zoom" src="\/images\/yakawewa-asphalt-2\.jpg" alt="Yakawewa Asphalt Plant Operation" style=\{\{ width: "100%", height: "auto", maxHeight: "600px", objectFit: "cover" \}\} \/>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newSection = '{/* Photo Gallery & Location Map */}\n' +
'        <section style={{ padding: "20px 20px 80px", backgroundColor: "var(--white)" }}>\n' +
'          <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "30px", alignItems: "stretch" }}>\n' +
'            \n' +
'            {/* Image Side */}\n' +
'            <div className="img-polish glass-panel" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 50px rgba(0,0,0,0.15)", height: "450px" }}>\n' +
'              <img className="img-polished img-hover-zoom" src="/images/resources/asphalt/yakawewa-plant-new.png" alt="RR Construction Asphalt Plant" style={{ width: "100%", height: "100%", objectFit: "cover" }} />\n' +
'            </div>\n' +
'\n' +
'            {/* Map Side */}\n' +
'            <div className="glass-panel" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 50px rgba(0,0,0,0.15)", height: "450px", position: "relative" }}>\n' +
'              <iframe src="https://maps.google.com/maps?q=8.5978539,80.3816994&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, position: "absolute", top: 0, left: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>\n' +
'            </div>\n' +
'\n' +
'          </div>\n' +
'        </section>';

if (regex.test(content)) {
    content = content.replace(regex, newSection);
    fs.writeFileSync('src/app/resources/asphalt/page.tsx', content, 'utf8');
    console.log("Updated Photo Gallery layout successfully.");
} else {
    console.log("Regex failed to find the Photo Gallery section.");
}
