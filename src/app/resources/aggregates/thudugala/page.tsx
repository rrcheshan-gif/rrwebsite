"use client";

import { useRouter } from "next/navigation";

import Link from "next/link";
import { useEffect } from "react";
import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function ThudugalaPlant() {
  const router = useRouter();
  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--white)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ position: 'relative', backgroundImage: "url('/images/page-headers/thudugala-plant-header.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: '70px 20px', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <AutoBreadcrumb />
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 24px', lineHeight: 1.2 }}>
            Thudugala <span style={{ color: "var(--primary-red)" }}>Plant</span>
          </h1>
          
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "80px 20px 50px", backgroundColor: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Thudugala Crusher Plant</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text-dark)", lineHeight: 1.1, margin: "0 0 20px 0", fontWeight: 800 }}>Premium Quality Aggregates & Crushed Metal</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.2rem", fontStyle: "italic", marginBottom: "30px", paddingLeft: "20px", borderLeft: "2px solid rgba(229, 57, 53, 0.3)" }}>Fueling Infrastructure Development in the Western Province.</p>
            
            <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", marginBottom: "15px", fontFamily: "var(--font-heading)", fontWeight: 700 }}>State-of-the-Art Crusher Technology</h3>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, margin: 0 }}>
              Our Thudugala Facility operates an advanced high-capacity crushing plant, capable of producing premium grade aggregates of various sizes. Equipped with state-of-the-art Hitachi excavators and dynamic multi-stage crushing units, we ensure consistent shape, strength, and durability for all commercial and infrastructural concrete requirements.
            </p>
          </div>
          
          <div style={{ display: "flex", justifyContent: "flex-start", gap: "20px", flexWrap: "wrap", marginTop: "20px", marginBottom: "30px" }}>
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
      <section style={{ padding: "60px 20px 50px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Plant Gallery</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text-dark)", margin: "0", fontWeight: 800 }}>Our Thudugala <span className="text-gradient" style={{ fontWeight: 300 }}>Facility</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
            {['thudugala-1.jpg', 'thudugala-2.jpg', 'thudugala-3.jpg', 'thudugala-4.jpg'].map((img, idx) => (
              <div key={idx} className="img-polish glass-panel" style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/3" }}>
                <img className="img-polished img-hover-zoom" src={`/images/${img}`} alt={`Thudugala Facility ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products List */}
      <section style={{ padding: "60px 20px 50px", backgroundColor: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Our Products</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "15px", fontWeight: 800 }}>THUDUGALA PLANT: Our <span className="text-gradient" style={{ fontWeight: 300 }}>Products</span></h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", margin: 0, lineHeight: 1.6 }}>High Quality Metal & Aggregates for Stronger Constructions</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", textAlign: "center" }}>
            {[
              '3/4" Metal', 'Chip', 'ABC', 'Mix', 'Dust', '1.5'
            ].map((prod, idx) => (
              <div key={idx} style={{ background: "var(--white)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border-soft)", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                <h4 style={{ color: "var(--text-dark)", fontSize: "1.1rem", margin: 0 }}>{prod}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "60px 20px 50px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ background: "var(--white)", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
            <div style={{ padding: "clamp(20px, 5vw, 40px)" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--text-dark)", marginBottom: "20px" }}>Contact THUDUGALA PLANT</h2>
              <p style={{ color: "var(--text-light)", marginBottom: "30px" }}>For bulk orders and material inquiries.</p>
              
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px" }}>Hotline</h4>
                <p style={{ color: "var(--text-dark)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "5px" }}>076 237 8799</p>
              </div>
              
              <div style={{ marginTop: "30px" }}>
                <h4 style={{ color: "var(--primary-red)", marginBottom: "10px" }}>Location</h4>
                <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.6 }}>RR Construction (Pvt) Ltd,<br/>Thudugala,<br/>Kalutara.</p>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "350px", background: "#eee" }}>
              <iframe src="https://maps.google.com/maps?q=6.567102,80.0623541&t=k&z=17&output=embed" width="100%" height="100%" style={{ border: 0, position: "absolute", top: 0, left: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    
      
    </div>
  );
}



