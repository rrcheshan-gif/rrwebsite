"use client";
import { useRouter } from "next/navigation";

import QuoteForm from "@/app/components/QuoteForm";
import { MapPin, Truck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ConcretePage() {
  const router = useRouter();
  const locations = [
    { name: "Ampara", district: "Ampara", image: "/images/ampara-concrete.jpg" },
    { name: "Jaffna", district: "Jaffna", image: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Image+Pending" },
    { name: "Bibila", district: "Monaragala", image: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Image+Pending" },
    { name: "Iththapana", district: "Kalutara", image: "/images/iththapana-concrete.jpg" },
    { name: "Vadduvakal", district: "Mullaitivu", image: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Image+Pending" },
    { name: "Galgamuwa", district: "Kurunegala", image: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Image+Pending" },
    { name: "Gandara", district: "Matara", image: "https://placehold.co/600x400/f1f5f9/94a3b8?text=Image+Pending" }
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header" style={{
          background: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('/images/yakawewa-asphalt-2.jpg') center/cover",
          padding: "100px 20px 60px",
          textAlign: "center",
          color: "white"
      }}>
        <div className="container">
          <div style={{ textAlign: "left", marginBottom: "24px", width: "100%", maxWidth: "1200px", margin: "0 auto 24px" }}>
            <button onClick={(e) => { e.preventDefault(); router.back(); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", fontSize: "1.1rem", padding: "0 0 2px 0", outline: "none" }}>&larr; Back</button>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "15px", fontWeight: 800 }}>Ready-Mix Concrete</h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto" }}>Premium quality Ready-Mix Concrete batching plants strategically located across Sri Lanka for uninterrupted project delivery.</p>
        </div>
      </div>

      <section style={{ padding: "80px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "left", marginBottom: "60px", maxWidth: "800px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>ISLAND-WIDE NETWORK</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", margin: "0 0 15px 0", fontWeight: 800, lineHeight: 1.1 }}>
              Concrete Batching <span className="text-gradient" style={{ fontWeight: 300 }}>Plants</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "left", margin: 0 }}>
              Our extensive network of batching plants ensures that high-grade ready-mix concrete reaches your construction site exactly when you need it, maintaining perfect consistency and strength.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "25px", margin: "0 auto" }}>
            {locations.map((loc, index) => (
              <div key={index} style={{ background: "var(--white)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", transition: "transform 0.2s ease" }}>
                <div style={{ minWidth: "min(100%, 300px)", position: "relative" }} className="img-polish">
                  <img className="img-polished img-hover-zoom" src={loc.image} alt={loc.name + " Concrete Plant"} style={{ width: "100%", height: "250px", objectFit: "cover", display: "block" }} />
                  <span style={{ position: "absolute", bottom: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "4px 12px", fontWeight: 700, fontSize: "0.8rem", borderRadius: "4px",  letterSpacing: "1px" }}>{loc.district}</span>
                </div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div>
                    <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "15px", fontFamily: "var(--font-heading)" }}>{loc.name} Plant</h3>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-dark)", fontSize: "0.95rem" }}>
                        <CheckCircle2 size={16} color="#10B981" /> Custom Mix Designs
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-dark)", fontSize: "0.95rem" }}>
                        <CheckCircle2 size={16} color="#10B981" /> On-Time Delivery
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
                    <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' }); }}>Request Quote</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    
      <QuoteForm allowedPlants={["Ampara (Concrete)", "Jaffna (Concrete)", "Bibila (Concrete)", "Iththapana (Concrete)", "Vadduvakal (Concrete)", "Galgamuwa (Concrete)", "Gandara (Concrete)"]} allowedProducts={["Ready-Mix Concrete", "Other"]} />
    </div>
  );
}
