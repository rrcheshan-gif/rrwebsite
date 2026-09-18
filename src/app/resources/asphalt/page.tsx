"use client";

import QuoteForm from "@/app/components/QuoteForm";
import { useEffect, useState } from "react";
import { MapPin, HardHat, Clock, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AsphaltProductionPage() {
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
          <div style={{ textAlign: "left", marginBottom: "24px", width: "100%", maxWidth: "1200px", margin: "0 auto 24px" }}>
            <button onClick={(e) => { e.preventDefault(); router.back(); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", fontSize: "1.1rem", padding: "0 0 2px 0", outline: "none" }}>&larr; Back</button>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "15px", fontWeight: 800 }}>Asphalt Production</h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: "700px", margin: "0 auto" }}>Premium hot-mix asphalt for highway and expressway paving projects across Sri Lanka.</p>
        </div>
      </div>

      <section style={{ padding: "60px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ color: "var(--primary-red)", fontSize: "1.2rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", fontWeight: 700 }}>Our Locations</h2>
            <h3 style={{ color: "var(--text-dark)", fontSize: "2.2rem", fontFamily: "var(--font-heading)" }}>Production Facilities</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "25px", margin: "0 auto" }}>
                        {/* Yakawewa Asphalt Plant */}
            <div onClick={() => router.push('/resources/asphalt/yakawewa')} style={{ background: "var(--white)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "pointer", transition: "transform 0.2s ease" }}>
              <div style={{ minWidth: 'min(100%, 300px)', cursor: "pointer", position: "relative" }} className="img-polish" >
                <img className="img-polished img-hover-zoom" src="/images/yakawewa-asphalt-2.jpg" alt="Yakawewa Asphalt Plant" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", bottom: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "4px 12px", fontWeight: 700, fontSize: "0.8rem", borderRadius: "4px",  letterSpacing: "1px" }}>Medawachchiya</span>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>Yakawewa Asphalt Plant</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "5px" }}>Premium hot-mix asphalt supplier for major highway and expressway paving projects across the region. Featuring automated temperature and mix-control systems to guarantee maximum durability and smooth highway and expressway surface finishes.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
                  <div className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center" }}>View Details</div>
                  <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
    
      <QuoteForm allowedPlants={["Yakawewa (North Central)"]} allowedProducts={["Asphalt Binder Course", "Asphalt Wearing Course", "Other"]} />
    </div>
  );
}
