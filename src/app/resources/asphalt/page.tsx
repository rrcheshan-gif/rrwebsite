"use client";
import BackButton from "@/app/components/BackButton";
import { useRouter } from "next/navigation";


import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function YakawewaPlant() {
  const router = useRouter();
  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--white)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ position: 'relative', backgroundImage: "url('/images/yakawewa-asphalt-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: '70px 20px', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 24px', lineHeight: 1.2 }}>
            Yakawewa <span style={{ color: "var(--primary-red)" }}>Asphalt Plant</span>
          </h1>
          <BackButton />
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "80px 20px 50px", backgroundColor: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Medawachchiya (North Central Province)</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text-dark)", lineHeight: 1.1, margin: "0 0 20px 0", fontWeight: 800 }}>High-Performance Hot Mix Asphalt</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.2rem", fontStyle: "italic", marginBottom: "30px", paddingLeft: "20px", borderLeft: "2px solid rgba(229, 57, 53, 0.3)" }}>Fueling highway and expressway development across Sri Lanka.</p>
            
            <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", marginBottom: "15px", fontFamily: "var(--font-heading)", fontWeight: 700 }}>Advanced Asphalt Batching Technology</h3>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, margin: 0 }}>
              Our Yakawewa Asphalt Facility operates a state-of-the-art, fully automated batching plant capable of producing premium hot-mix asphalt for large-scale infrastructure projects. We utilize precision temperature and mix-control systems to guarantee maximum durability, load-bearing capacity, and smooth highway and expressway surface finishes that withstand extreme weather and heavy traffic conditions.
            </p>
          </div>
          
          <div style={{ display: "flex", justifyContent: "flex-start", gap: "20px", flexWrap: "wrap", marginTop: "20px", marginBottom: "30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.2)", color: "var(--primary-red)", padding: "10px 22px", borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem", backdropFilter: "blur(5px)" }}>
                <CheckCircle size={20} strokeWidth={2.5} />
                High Durability
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.2)", color: "var(--primary-red)", padding: "10px 22px", borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem", backdropFilter: "blur(5px)" }}>
                <CheckCircle size={20} strokeWidth={2.5} />
                Automated Quality Control
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(229, 57, 53, 0.08)", border: "1px solid rgba(229, 57, 53, 0.2)", color: "var(--primary-red)", padding: "10px 22px", borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem", backdropFilter: "blur(5px)" }}>
                <CheckCircle size={20} strokeWidth={2.5} />
                High Capacity Output
              </div>
          </div>
        </div>
      </section>

      {/* Asphalt Categories Section */}
      <section style={{ padding: "60px 20px 80px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Our Products</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "15px", fontWeight: 800 }}>Asphalt Production <span className="text-gradient" style={{ fontWeight: 300 }}>Categories</span></h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "100%", textAlign: "justify", margin: "0", lineHeight: 1.6 }}>We specialize in manufacturing highly engineered asphalt mixtures tailored for specific layers of flexible pavement construction.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
            
            {/* Binder Course */}
            <div style={{ background: "var(--white)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div style={{ background: "var(--dark-panel-bg)", padding: "clamp(20px, 4vw, 30px) clamp(16px, 5vw, 40px)", color: "white", borderBottom: "4px solid var(--primary-red)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", margin: 0 }}>Asphalt Binder Course</h3>
                <p style={{ margin: "5px 0 0", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", letterSpacing: "1px", textTransform: "uppercase" }}>Structural Base Layer</p>
              </div>
              <div style={{ padding: "clamp(20px, 5vw, 40px)" }}>
                <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "25px" }}>
                  The Binder Course is the heavy-duty intermediate layer of flexible pavement. Engineered with larger aggregates and a specific bitumen ratio, it is designed to bear and distribute heavy traffic loads down to the sub-base while preventing structural deformation.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle size={20} color="var(--primary-red)" style={{ marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1rem" }}><strong>High Load Distribution:</strong> Structurally supports heavy commercial vehicles.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle size={20} color="var(--primary-red)" style={{ marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1rem" }}><strong>Rutting Resistance:</strong> Coarser aggregate interlock prevents road deformation.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle size={20} color="var(--primary-red)" style={{ marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1rem" }}><strong>Optimal Bitumen Content:</strong> Balanced for maximum strength and economy.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Wearing Course */}
            <div style={{ background: "var(--white)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div style={{ background: "var(--dark-panel-bg)", padding: "clamp(20px, 4vw, 30px) clamp(16px, 5vw, 40px)", color: "white", borderBottom: "4px solid var(--primary-red)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", margin: 0 }}>Asphalt Wearing Course</h3>
                <p style={{ margin: "5px 0 0", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", letterSpacing: "1px", textTransform: "uppercase" }}>Surface Protection Layer</p>
              </div>
              <div style={{ padding: "clamp(20px, 5vw, 40px)" }}>
                <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "25px" }}>
                  The Wearing Course is the premium top surface layer in direct contact with traffic and weather. Formulated with smaller, highly polished aggregates and premium bitumen, it provides a smooth, waterproof, and skid-resistant riding surface.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle size={20} color="var(--primary-red)" style={{ marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1rem" }}><strong>Superior Friction:</strong> Enhances tire grip and overall road safety.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle size={20} color="var(--primary-red)" style={{ marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1rem" }}><strong>Weather & Water Resistance:</strong> Seals the pavement to prevent water ingress.</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle size={20} color="var(--primary-red)" style={{ marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1rem" }}><strong>Smooth Riding Surface:</strong> Reduces road noise and improves vehicle efficiency.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section style={{ padding: "20px 20px 80px", backgroundColor: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div className="img-polish glass-panel" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 50px rgba(0,0,0,0.15)" }}>
            <img className="img-polished img-hover-zoom" src="/images/yakawewa-asphalt-2.jpg" alt="Yakawewa Asphalt Plant Operation" style={{ width: "100%", height: "auto", maxHeight: "600px", objectFit: "cover" }} />
          </div>
        </div>
      </section>

    
      
    </div>
  );
}

