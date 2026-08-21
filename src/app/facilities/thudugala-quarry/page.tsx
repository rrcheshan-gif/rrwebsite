"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ThudugalaPlant() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/thudugala-plant-header.jpg')", padding: "50px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.4)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/facilities" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold" }}>← Back to Quarries & Aggregates</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>High Capacity Crusher Plant</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem", textTransform: "uppercase", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>THUDUGALA PLANT</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "50px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>Thudugala Crusher Plant</h4>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.8rem", color: "var(--text-dark)", lineHeight: 1.2, marginBottom: "10px" }}>Premium Quality Aggregates & Crushed Metal</h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.2rem", fontStyle: "italic", marginBottom: "40px" }}>Fueling Infrastructure Development in the Western Province.</p>

          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderTop: "4px solid var(--primary-red)", marginBottom: "40px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", textAlign: "left" }}>
            <h3 style={{ color: "var(--text-dark)", marginBottom: "15px", fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}>State-of-the-Art Crusher Technology</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.1rem" }}>
              Our Thudugala Facility operates an advanced high-capacity crushing plant, capable of producing premium grade aggregates of various sizes. Equipped with state-of-the-art Hitachi excavators and dynamic multi-stage crushing units, we ensure consistent shape, strength, and durability for all commercial and infrastructural concrete requirements.
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
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", textTransform: "uppercase" }}>Our Thudugala Facility</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {['thudugala-1.jpg', 'thudugala-2.jpg', 'thudugala-3.jpg', 'thudugala-4.jpg'].map((img, idx) => (
              <div key={idx} className="img-polish glass-panel" style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/3" }}>
                <img className="img-polished img-hover-zoom" src={`/images/${img}`} alt={`Thudugala Facility ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products List */}
      <section style={{ padding: "50px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", textTransform: "uppercase" }}>THUDUGALA PLANT: Our Products</h2>
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
      <section style={{ padding: "50px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ background: "var(--white)", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div style={{ padding: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--text-dark)", marginBottom: "20px" }}>Contact THUDUGALA PLANT</h2>
              <p style={{ color: "var(--text-light)", marginBottom: "30px" }}>For bulk orders, M-Sand inquiries, and ready-mix concrete supplies.</p>
              
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px" }}>Direct Lines</h4>
                <p style={{ color: "var(--text-dark)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "5px" }}>076 048 7418</p>
                <p style={{ color: "var(--text-dark)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "5px" }}>077 294 1668</p>
              </div>

              <div>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px", marginTop: "30px" }}>Hotlines</h4>
                <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 600 }}>077 345 6789</p>
                <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 600 }}>071 234 5678</p>
              </div>
              
              <div style={{ marginTop: "30px" }}>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px" }}>Location</h4>
                <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.6 }}>RR Construction (Pvt) Ltd,<br/>Thudugala,<br/>Kalutara.</p>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "350px", background: "#eee" }}>
              <iframe src="https://maps.google.com/maps?q=Thudugala,+Sri+Lanka&t=k&output=embed" width="100%" height="100%" style={{ border: 0, position: "absolute", top: 0, left: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


