"use client";
import BackButton from "@/app/components/BackButton";
import { useEffect, useState } from "react";
import { MapPin, HardHat, Clock, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CrusherPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { alert("Request submitted successfully!"); setIsSubmitting(false); e.target.reset(); }, 1500);
  };

  return (
    <main style={{ backgroundColor: "var(--white)", minHeight: "100vh" }}>
      <section className="page-header" style={{ position: 'relative', backgroundImage: "url('/images/yakawewa-asphalt-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: '70px 20px', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 24px', lineHeight: 1.2 }}>
            RR <span style={{ color: "var(--primary-red)" }}>Aggregates & Sand</span>
          </h1>
          <p className="hero-slogan" style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "650px", lineHeight: 1.6, margin: "10px 0 0 0" }}>
            Massive aggregate crushing and sand production capabilities fueling our heavy civil engineering operations.
          </p>
          <BackButton />
        </div>
      </section>

      <section style={{ padding: "60px 20px", backgroundColor: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "800px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>OUR LOCATIONS</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", margin: 0, fontWeight: 800, lineHeight: 1.1 }}>
              Production <span className="text-gradient" style={{ fontWeight: 300 }}>Facilities</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "25px", margin: "0 auto" }}>
            
                        {/* Thudugala Plant */}
            <div onClick={() => router.push('/resources/aggregates/thudugala')} style={{ background: "var(--white)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "pointer", transition: "transform 0.2s ease" }}>
              <div style={{ minWidth: 'min(100%, 300px)', cursor: "pointer", position: "relative" }} className="img-polish" >
                <img className="img-polished img-hover-zoom" src="/images/thudugala-5.jpg" alt="Thudugala Plant" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", bottom: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "4px 12px", fontWeight: 700, fontSize: "0.8rem", borderRadius: "4px",  letterSpacing: "1px" }}>Kaluthara</span>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>Thudugala Crusher Plant</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "5px" }}>Serving Colombo and Western Province developments, providing high-yield aggregates for high-rise buildings, expressways, and major infrastructure projects. Equipped with state-of-the-art crushing technology to ensure consistent material quality.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
                  <div className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center" }}>View Details</div>
                  <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>Quote</a>
                </div>
              </div>
            </div>
            {/* Omanthai Plant */}
            <div onClick={() => router.push('/resources/aggregates/omanthai')} style={{ background: "var(--white)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "pointer", transition: "transform 0.2s ease" }}>
              <div style={{ minWidth: 'min(100%, 300px)', cursor: "pointer", position: "relative" }} className="img-polish" >
                <img className="img-polished img-hover-zoom" src="/images/omanthai/plant-1.jpg" alt="Omanthai Plant" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", bottom: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "4px 12px", fontWeight: 700, fontSize: "0.8rem", borderRadius: "4px",  letterSpacing: "1px" }}>Vavuniya</span>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>Omanthai Plant</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "5px" }}>A key aggregates supplier for Northern infrastructure development and commercial sectors. Operating with high-capacity machinery to deliver uninterrupted material supply for large-scale provincial highway, expressway, and bridge constructions.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
                  <div className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center" }}>View Details</div>
                  <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>Quote</a>
                </div>
              </div>
            </div>

            {/* Veerapuram Plant */}
            <div onClick={() => router.push('/resources/aggregates/veerapuram')} style={{ background: "var(--white)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "pointer", transition: "transform 0.2s ease" }}>
              <div style={{ minWidth: 'min(100%, 300px)', cursor: "pointer", position: "relative" }} className="img-polish" >
                <img className="img-polished img-hover-zoom" src="/images/page-headers/veerapuram-plant-header.jpg" alt="Veerapuram Plant" style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", bottom: "15px", left: "15px", background: "var(--primary-red)", color: "white", padding: "4px 12px", fontWeight: 700, fontSize: "0.8rem", borderRadius: "4px",  letterSpacing: "1px" }}>Vavuniya</span>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>Veerapuram M-Sand Plant</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "5px" }}>The modern alternative to river sand. Our Veerapuram facility provides high-quality Manufactured Sand (M-Sand) and aggregates, ensuring stronger constructions while preserving natural resources.</p>
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

      
      
    
      
    </main>
  );
}
