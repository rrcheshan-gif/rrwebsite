const fs = require('fs');
const path = require('path');

// Read the template
const facilitiesContent = fs.readFileSync('src/app/facilities/page.tsx', 'utf8');

// Ensure directories exist
['asphalt', 'crusher', 'sand', 'concrete'].forEach(dir => {
    const fullPath = path.join('src/app/resources', dir);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }
});

// Helper to extract a plant block from facilities content
function extractPlant(plantName) {
    const lines = facilitiesContent.split('\n');
    let startIndex = -1;
    let endIndex = -1;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(`{/* ${plantName}`)) {
            startIndex = i;
            break;
        }
    }
    
    if (startIndex !== -1) {
        for (let i = startIndex; i < lines.length; i++) {
            const line = lines[i];
            braceCount += (line.match(/<div/g) || []).length;
            braceCount -= (line.match(/<\/div>/g) || []).length;
            
            if (i > startIndex && braceCount === 0 && line.includes('</div>')) {
                endIndex = i;
                break;
            }
        }
        return lines.slice(startIndex, endIndex + 1).join('\n');
    }
    return '';
}

const thudugala = extractPlant('Thudugala Crusher Plant');
const veerapuram = extractPlant('Veerapuram M Sand Plant');
const omanthai = extractPlant('Omanthai Plant');
const yakawewa = extractPlant('Yakawewa Asphalt Plant');

function generatePage(title, desc, plantBlocks) {
    // Generate page based on facilities template but with replaced title, description, and plants
    let newPage = facilitiesContent;
    
    // Replace Header
    newPage = newPage.replace(/Quarries & Aggregates/g, title);
    newPage = newPage.replace(/Premium construction aggregates, M-Sand, and asphalt/g, desc);
    
    // Replace the grid content
    const gridStart = newPage.indexOf('<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "25px", margin: "0 auto", maxWidth: "1200px" }}>');
    const sectionEnd = newPage.indexOf('</section>', gridStart);
    
    if (gridStart !== -1 && sectionEnd !== -1) {
        const gridContentStart = newPage.indexOf('>', gridStart) + 1;
        const gridContentEnd = newPage.lastIndexOf('</div>', sectionEnd - 15); // approximate inner div close
        // It's tricky to string replace the exact grid inner content. Let's just do a regex replace for the whole section
    }
    
    // An easier way: Just construct a clean page based on standard imports
    return `"use client";
import { useEffect, useState } from "react";
import { MapPin, HardHat, Clock, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ${title.replace(/\s+/g, '')}Page() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { alert("Request submitted successfully!"); setIsSubmitting(false); e.target.reset(); }, 1500);
  };

  return (
    <div className="page-wrapper">
      <div className="page-header" style={{
          background: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/yakawewa-asphalt-2.jpg') center/cover",
          padding: "100px 20px 60px",
          textAlign: "center",
          color: "white"
      }}>
        <div className="container">
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "15px", fontWeight: 800 }}>${title}</h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto" }}>${desc}</p>
        </div>
      </div>

      <section style={{ padding: "60px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ color: "var(--primary-red)", fontSize: "1.2rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", fontWeight: 700 }}>Our Locations</h2>
            <h3 style={{ color: "var(--text-dark)", fontSize: "2.2rem", fontFamily: "var(--font-heading)" }}>Production Facilities</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "25px", margin: "0 auto" }}>
            ${plantBlocks}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" style={{ padding: "60px 20px 50px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ background: "var(--white)", color: "var(--text-dark)", padding: "50px", borderRadius: "12px", borderTop: "6px solid var(--primary-red)", boxShadow: "0 15px 40px rgba(0,0,0,0.05)" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h3 style={{ color: "var(--primary-red)", fontFamily: "var(--font-heading)", fontSize: "2.2rem", marginBottom: "10px" }}>Request a Quote</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>Let us know your project requirements, and our logistics manager will get back to you with custom pricing and delivery timelines.</p>
            </div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div><label style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Your Name</label><input type="text" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", borderRadius: "8px" }} required /></div>
                <div><label style={{ display: "block", marginBottom: "5px", color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: "bold" }}>Phone / Mobile Number</label><input type="tel" style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", background: "var(--input-bg)", borderRadius: "8px" }} required /></div>
              </div>
              <div style={{ textAlign: "center", marginTop: "10px" }}><button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Submit Order Request"}</button></div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}`;
}

fs.writeFileSync('src/app/resources/asphalt/page.tsx', generatePage('Asphalt Production', 'Premium hot-mix asphalt for highway and road paving projects across Sri Lanka.', yakawewa));
fs.writeFileSync('src/app/resources/crusher/page.tsx', generatePage('Crusher Plants', 'High-yield aggregates for high-rise buildings, expressways, and major infrastructure projects.', thudugala + '\n' + omanthai));
fs.writeFileSync('src/app/resources/sand/page.tsx', generatePage('Sand & M-Sand', 'High-quality Manufactured Sand (M-Sand) providing superior compressive strength.', veerapuram));
fs.writeFileSync('src/app/resources/concrete/page.tsx', generatePage('Ready-Mix Concrete', 'Information about our Concrete batching plants will be updated soon.', '<div><p style="text-align:center; padding: 50px; background: white; border-radius: 12px; color: var(--text-light);">Concrete facility details will be added soon.</p></div>'));

// Finally, we should delete the old Quarries & Aggregates page if it's completely migrated? Or maybe just leave it unlinked for now so it doesn't break any external links.
// Let's leave facilities/page.tsx alone, but since it's unlinked, it's fine. 

console.log('Successfully created resources pages');
