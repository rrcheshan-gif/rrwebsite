"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function VeerapuramPlant() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const galleryImages = [
    'omanthai-1.jpg',
    'omanthai-2.jpg',
    'omanthai-3.jpg',
    'omanthai-4.jpg'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImg) return;
      const currentIdx = galleryImages.indexOf(lightboxImg.replace(/^\/images\//, ''));
      if (currentIdx === -1) return;
      
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIdx + 1) % galleryImages.length;
        setLightboxImg(`images/${galleryImages[nextIdx]}`);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
        setLightboxImg(`images/${galleryImages[prevIdx]}`);
      } else if (e.key === 'Escape') {
        setLightboxImg(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImg]);

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
            background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', 
            justifyContent: 'center', alignItems: 'center', padding: '20px'
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} onClick={() => setLightboxImg(null)}></div>
          <span 
            style={{ position: 'absolute', top: '20px', right: '30px', color: 'white', fontSize: '40px', fontWeight: 'bold', cursor: 'pointer', zIndex: 10000 }}
            onClick={() => setLightboxImg(null)}
          >
            &times;
          </span>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              const currentIdx = galleryImages.indexOf(lightboxImg.replace(/^\/images\//, ''));
              const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
              setLightboxImg(`images/${galleryImages[prevIdx]}`);
            }}
            style={{ position: 'absolute', left: '30px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '24px', cursor: 'pointer', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            â†
          </button>

          <img src={`/${lightboxImg}`} alt="Fullscreen view" style={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', objectFit: 'contain', position: 'relative', zIndex: 10000 }} />

          <button 
            onClick={(e) => {
              e.stopPropagation();
              const currentIdx = galleryImages.indexOf(lightboxImg.replace(/^\/images\//, ''));
              const nextIdx = (currentIdx + 1) % galleryImages.length;
              setLightboxImg(`images/${galleryImages[nextIdx]}`);
            }}
            style={{ position: 'absolute', right: '30px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '24px', cursor: 'pointer', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            â†’
          </button>
        </div>
      )}
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/veerapuram-plant-header.jpg')", padding: "50px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.4)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/quarries-aggregates" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold" }}>â† Back to Quarries & Aggregates</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>Sand Plant & M-Sand Facility</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem", textTransform: "uppercase", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>VEERAPURAM PLANT</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "50px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Veerapuram M Sand Plant and Crusher Plant</h4>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", color: "var(--text-dark)", lineHeight: 1.2, marginBottom: "10px" }}>Choose M-SAND for your all kind of Constructions</h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.2rem", fontStyle: "italic", marginBottom: "40px" }}>The Modern Alternative to the River Sand.</p>

          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderTop: "4px solid var(--primary-red)", marginBottom: "40px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", textAlign: "left" }}>
            <h3 style={{ color: "var(--text-dark)", marginBottom: "15px", fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}>What is M-Sand?</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.1rem" }}>
              M-Sand, or Manufactured sand, is a high-quality, Eco-Friendly alternative to natural river sand, produced by washing crushed hard granite stones. Engineered to meet construction standards, M-Sand offers superior strength, consistent quality, and better workability, making it the ideal choice for concrete, plastering, and masonry work.
            </p>
          </div>

                      <div style={{ display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap", marginTop: "15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.2)", color: "var(--primary-red)", padding: "10px 22px", borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem", backdropFilter: "blur(5px)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                High Quality
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.2)", color: "var(--primary-red)", padding: "10px 22px", borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem", backdropFilter: "blur(5px)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Cost Effective
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.2)", color: "var(--primary-red)", padding: "10px 22px", borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem", backdropFilter: "blur(5px)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Eco Friendly
              </div>
            </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section style={{ padding: "50px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", textTransform: "uppercase" }}>Our Veerapuram Facility</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {galleryImages.map((img, idx) => (
              <div key={idx} className="img-polish glass-panel" style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/3", cursor: "pointer" }} onClick={() => setLightboxImg(`images/${img}`)}>
                <img className="img-polished img-hover-zoom" src={`/images/${img}`} alt={`Veerapuram Facility ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switch to M-Sand */}
      <section style={{ padding: "50px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", textTransform: "uppercase" }}>Why Switch to Our M-Sand?</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div style={{ background: "var(--bg-light)", padding: "30px", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--text-dark)", borderBottom: "2px solid #cbd5e1", paddingBottom: "10px", marginBottom: "20px" }}>Core Benefits</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Consistency: Uniform size and shape ensure smooth concrete mix and finish.",
                  "Strength: Enhances the durability and strength of concrete and mortar.",
                  "Clean & Safe: Free from silt, clay, and organic impurities found in river sand.",
                  "Cost Effective: Minimal wastage, low cost, and availability throughout the year.",
                  "Readily Available: Avoid delays in supply due to seasonal shortages, river bans, or transport permits."].map((item, idx) => {
                    const [title, desc] = item.split(": ");
                    return (
                      <li key={idx} style={{ marginBottom: "20px" }}>
                        <h4 style={{ color: "var(--primary-red)", marginBottom: "5px" }}>{title}</h4>
                        <p style={{ color: "var(--text-light)", fontSize: "0.95rem" }}>{desc}</p>
                      </li>
                    )
                  })}
              </ul>
            </div>
            <div style={{ background: "var(--bg-light)", padding: "30px", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--text-dark)", borderBottom: "2px solid #cbd5e1", paddingBottom: "10px", marginBottom: "20px" }}>Other Advantages</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Eco-Friendly: Reduces riverbed depletion and protects natural resources.",
                  "Higher Strength: Controlled gradation can lead to higher compressive strength in concrete compared to river sand.",
                  "Trusted by Engineers & Builders: Used in major commercial and residential projects (e.g. Wind power project Mannar)."].map((item, idx) => {
                    const [title, desc] = item.split(": ");
                    return (
                      <li key={idx} style={{ marginBottom: "20px" }}>
                        <h4 style={{ color: "var(--primary-red)", marginBottom: "5px" }}>{title}</h4>
                        <p style={{ color: "var(--text-light)", fontSize: "0.95rem" }}>{desc}</p>
                      </li>
                    )
                  })}
              </ul>
              <div style={{ marginTop: "30px", padding: "15px", background: "rgba(46, 125, 50, 0.1)", borderRadius: "8px", borderLeft: "3px solid var(--primary-red)" }}>
                <p style={{ color: "var(--text-dark)", fontSize: "0.9rem", fontWeight: 600 }}>We can supply bulk quantities and 50kg & 100kg bags according to your requirement.</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ background: "var(--bg-light)", padding: "30px", borderRadius: "8px", flex: 1 }}>
                <h3 style={{ color: "var(--text-dark)", borderBottom: "2px solid #cbd5e1", paddingBottom: "10px", marginBottom: "20px" }}>Ideal For</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "12px", color: "var(--text-light)" }}>Ready-Mix Concrete (RMC)</li>
                  <li style={{ marginBottom: "12px", color: "var(--text-light)" }}>Brick & Block laying</li>
                  <li style={{ marginBottom: "12px", color: "var(--text-light)" }}>Plastering & Tiling</li>
                  <li style={{ marginBottom: "12px", color: "var(--text-light)" }}>Foundations and Road work</li>
                </ul>
              </div>
              <div style={{ background: "var(--bg-light)", padding: "30px", borderRadius: "8px", flex: 1 }}>
                <h3 style={{ color: "var(--text-dark)", borderBottom: "2px solid #cbd5e1", paddingBottom: "10px", marginBottom: "20px" }}>NBRO Test Reports</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "8px", color: "var(--text-light)", fontSize: "0.9rem" }}>Sieve Analysis</li>
                  <li style={{ marginBottom: "8px", color: "var(--text-light)", fontSize: "0.9rem" }}>Specific Gravity & Water Absorption</li>
                  <li style={{ marginBottom: "8px", color: "var(--text-light)", fontSize: "0.9rem" }}>Moisture Content % (dry mass)</li>
                  <li style={{ marginBottom: "8px", color: "var(--text-light)", fontSize: "0.9rem" }}>Compacted Bulk Density</li>
                  <li style={{ marginBottom: "8px", color: "var(--text-light)", fontSize: "0.9rem" }}>Loose Bulk Density</li>
                  <li style={{ marginBottom: "8px", color: "var(--text-light)", fontSize: "0.9rem" }}>Soundness Test</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Table */}
      <section style={{ padding: "50px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", textTransform: "uppercase" }}>VEERAPURAM PLANT: Quality Assurance</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "10px" }}>Our M-Sand is manufactured under strict quality control standards to ensure consistent performance.</p>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>

          <div style={{ overflowX: "auto", background: "var(--bg-base)", padding: "20px", borderRadius: "8px", boxShadow: "0 5px 20px rgba(0,0,0,0.05)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 'min(100%, 600px)' }}>
              <thead>
                <tr style={{ background: "#0f172a", color: "white" }}>
                  <th colSpan={2} style={{ padding: "15px", border: "1px solid #334155", textAlign: "center" }}>BS 882 Standard (Limits)</th>
                  <th colSpan={2} style={{ padding: "15px", border: "1px solid #334155", textAlign: "center" }}>ICTAD Standard (Limits)</th>
                  <th colSpan={2} style={{ padding: "15px", border: "1px solid #334155", textAlign: "center", background: "var(--primary-red)" }}>Our M-Sand (Passing %)</th>
                </tr>
                <tr style={{ background: "var(--bg-light)", color: "var(--text-dark)" }}>
                  <th style={{ padding: "12px", border: "1px solid var(--border-soft)", textAlign: "center" }}>Sieve</th>
                  <th style={{ padding: "12px", border: "1px solid var(--border-soft)", textAlign: "center" }}>Limits</th>
                  <th style={{ padding: "12px", border: "1px solid var(--border-soft)", textAlign: "center" }}>Sieve</th>
                  <th style={{ padding: "12px", border: "1px solid var(--border-soft)", textAlign: "center" }}>Limits</th>
                  <th style={{ padding: "12px", border: "1px solid var(--border-soft)", textAlign: "center" }}>Sieve</th>
                  <th style={{ padding: "12px", border: "1px solid var(--border-soft)", textAlign: "center" }}>Passing %</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center", color: "var(--text-light)" }}>
                {[
                  ["10mm", "100", "10mm", "100", "10mm", "100"],
                  ["5mm", "89 - 100", "5mm", "91 - 100", "5mm", "99.69"],
                  ["2.36mm", "60 - 100", "2.36mm", "75 - 100", "2.36mm", "84.56"],
                  ["1.18mm", "30 - 100", "1.18mm", "55 - 90", "1.18mm", "59.39"],
                  ["0.600mm", "15 - 100", "0.600mm", "35 - 59", "0.600mm", "39.36"],
                  ["0.300mm", "5 - 70", "0.300mm", "8 - 30", "0.300mm", "22.68"],
                  ["0.150mm", "0 - 15", "0.150mm", "0 - 10", "0.150mm", "8.03"]
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: "10px", border: "1px solid var(--border-soft)" }}>{row[0]}</td><td style={{ padding: "10px", border: "1px solid var(--border-soft)" }}>{row[1]}</td>
                    <td style={{ padding: "10px", border: "1px solid var(--border-soft)" }}>{row[2]}</td><td style={{ padding: "10px", border: "1px solid var(--border-soft)" }}>{row[3]}</td>
                    <td style={{ padding: "10px", border: "1px solid var(--border-soft)", fontWeight: 600 }}>{row[4]}</td><td style={{ padding: "10px", border: "1px solid var(--border-soft)", fontWeight: 600, color: "var(--primary-red)" }}>{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p style={{ color: "var(--primary-red)", fontWeight: 600, fontSize: "1.1rem" }}>Fines content (0.075mm) maintained strictly at <span style={{ color: "#D30000" }}>less than 3%</span> (Complying with BS 882 & ICTAD Standards)</p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section style={{ padding: "50px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", textTransform: "uppercase" }}>VEERAPURAM PLANT: Our Products</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "10px" }}>High Quality Aggregates & M-Sand for Stronger Constructions</p>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", textAlign: "center" }}>
            {[
              "M-Sand", "12-19 mm (Concrete Agg)", "10-16 mm Aggregates", "16-19 mm Aggregates", 
              "5-19 mm (Concrete Agg)", "5-10 mm Aggregates (Chips)", "0-5mm (Quarry Dust)", 
              "ABC", "C1", "6 x 9", "Boulders", "37.5 mm Aggregates", "50mm Aggregates", "VSI Aggregates (Cubical)"
            ].map((prod, idx) => (
              <div key={idx} style={{ background: "var(--white)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border-soft)", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                <h4 style={{ color: "var(--text-dark)", fontSize: "1.1rem", margin: 0 }}>{prod}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "50px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ background: "var(--white)", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div style={{ padding: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--text-dark)", marginBottom: "20px" }}>Contact VEERAPURAM PLANT</h2>
              <p style={{ color: "var(--text-light)", marginBottom: "30px" }}>For bulk orders, M-Sand inquiries, and ready-mix concrete supplies.</p>
              
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px" }}>Direct Lines</h4>
                <p style={{ color: "var(--text-dark)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "5px" }}>076 048 7418</p>
                <p style={{ color: "var(--text-dark)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "5px" }}>077 294 1668</p>
              </div>

              <div>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px", marginTop: "30px" }}>Hotlines</h4>
                <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 600 }}>076 048 7418</p>
                <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 600 }}>077 294 1668</p>
                <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 600 }}>074 192 1464</p>
              </div>
              
              <div style={{ marginTop: "30px" }}>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px" }}>Location</h4>
                <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.6 }}>RR Construction (Pvt) Ltd,<br/>Thudarikkulam, Veerapuram,<br/>Vavuniya.</p>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "350px", background: "#eee" }}>
              <iframe src="https://maps.google.com/maps?q=Veerapuram,+Vavuniya,+Sri+Lanka&t=k&output=embed" width="100%" height="100%" style={{ border: 0, position: "absolute", top: 0, left: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

