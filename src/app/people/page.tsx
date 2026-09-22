
import Link from 'next/link';
import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function People() {
  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
        

        

      {/* Page Header */}
      <section className="page-header" style={{ 
        backgroundImage: "url('/images/about/our-people-team.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        padding: "140px 20px 40px", 
        textAlign: "left", 
        position: "relative", 
        borderRadius: '32px', 
        margin: '0 20px 40px', 
        overflow: "hidden" 
      }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <AutoBreadcrumb />
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Our <span style={{ color: "var(--primary-red)" }}>People</span></h1>
          
        </div>
      </section>

            {/* Intro */}
      <section style={{ padding: "60px 20px 50px" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
            <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
            <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>OUR TEAM</h4>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "20px", fontWeight: 800, lineHeight: 1.1 }}>
            The Engine of RR <span className="text-gradient" style={{ fontWeight: 300 }}>Construction</span>
          </h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "40px", textAlign: "left" }}>
            Infrastructure isn't built by machines; it's built by people. From our boardroom in Colombo to the furthest reaches of our highway projects, the RR Construction family consists of over <strong>1,400+ dedicated professionals</strong>. We cultivate an environment that rewards precision, promotes safety, and encourages lifelong learning.
          </p>
        </div>
      </section>

      {/* Workforce Categories */}
      <section style={{ padding: "0 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "40px" }}>
          
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 className="card-heading" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", fontWeight: 800 }}>Engineering & Technical</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>Our core strength lies in our formidable, multidisciplinary team of industry veterans. This includes highly qualified Chartered Civil Engineers, precision-focused Quantity Surveyors, Geotechnical Experts, dedicated Health & Safety Professionals, and meticulous QA/QC Specialists. Together, they deploy advanced engineering methodologies and innovative problem-solving to ensure that every infrastructure project not only meets but consistently exceeds rigorous global engineering benchmarks.</p>
          </div>

          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 className="card-heading" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", fontWeight: 800 }}>Skilled Trades & Operators</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>Recognized as the resilient backbone of our field operations, our direct workforce comprises highly trained, certified heavy machinery operators, master masons, specialized steel fixers, and expert asphalt technicians. We take immense pride in our long-term employee retention, with many of our seasoned tradespeople having been with us since the company's inception.</p>
          </div>

          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 className="card-heading" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", fontWeight: 800 }}>Training & Development</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>We are profoundly committed to the Continuous Professional Development (CPD) of our workforce. We invest heavily in structured upskilling programs, ranging from rigorous ISO-certified occupational health and safety training to advanced workshops in modern structural technologies.</p>
          </div>

        </div>
      </section>
{/* Join Us CTA */}
      <section style={{ padding: "60px 20px 50px", background: "#1e293b", color: "white", textAlign: "left" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 6vw, 3rem)", marginBottom: "20px", color: "white" }}>Build Your Career With Us</h2>
          <p style={{ color: "#cbd5e1", fontSize: "1.2rem", maxWidth: "1500px", margin: "0 auto 0 0", lineHeight: 1.6 }}>Ready to engineer tomorrow? We are always looking for passionate engineers, project managers, and skilled tradespeople to join our growing team.</p>
        </div>
      </section>
    </div>
  );
}




