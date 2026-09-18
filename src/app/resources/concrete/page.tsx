"use client";

import QuoteForm from "@/app/components/QuoteForm";
import { MapPin, Truck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ConcretePage() {
  const locations = [
    { name: "Ampara", district: "Eastern Province" },
    { name: "Jaffna", district: "Northern Province" },
    { name: "Bibila", district: "Uva Province" },
    { name: "Iththapana", district: "Western Province" },
    { name: "Vadduvakal", district: "Mullaitivu District" },
    { name: "Galgamuwa", district: "North Western Province" },
    { name: "Gandara", district: "Matara District" }
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
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "15px", fontWeight: 800 }}>Ready-Mix Concrete</h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto" }}>Premium quality Ready-Mix Concrete batching plants strategically located across Sri Lanka for uninterrupted project delivery.</p>
        </div>
      </div>

      <section style={{ padding: "80px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ color: "var(--primary-red)", fontSize: "1.2rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", fontWeight: 700 }}>Island-Wide Network</h2>
            <h3 style={{ color: "var(--text-dark)", fontSize: "2.4rem", fontFamily: "var(--font-heading)" }}>Concrete Batching Plants</h3>
            <p style={{ color: "var(--text-light)", maxWidth: "700px", margin: "15px auto 0", fontSize: "1.1rem", lineHeight: 1.6 }}>
              Our extensive network of batching plants ensures that high-grade ready-mix concrete reaches your construction site exactly when you need it, maintaining perfect consistency and strength.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "25px", margin: "0 auto" }}>
            {locations.map((loc, index) => (
              <div key={index} style={{
                background: "var(--white)",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                borderTop: "4px solid var(--primary-red)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.04)";
              }}
              >
                <div style={{ position: "absolute", right: "-15px", top: "-15px", opacity: 0.04, transform: "rotate(-15deg)" }}>
                  <Truck size={120} />
                </div>
                
                <h4 style={{ color: "var(--text-dark)", fontSize: "1.5rem", fontFamily: "var(--font-heading)", marginBottom: "8px", position: "relative", zIndex: 2 }}>
                  {loc.name}
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "25px", position: "relative", zIndex: 2 }}>
                  <MapPin size={16} color="var(--primary-red)" />
                  {loc.district}
                </div>
                
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px", position: "relative", zIndex: 2 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "var(--text-dark)", fontWeight: 500 }}>
                    <CheckCircle2 size={16} color="#10B981" /> Custom Mix Designs
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "var(--text-dark)", fontWeight: 500 }}>
                    <CheckCircle2 size={16} color="#10B981" /> On-Time Delivery
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
