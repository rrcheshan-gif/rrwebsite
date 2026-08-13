import Link from 'next/link';

export default function Training() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/training-dev-header.jpg')", padding: "60px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center 30%", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.65) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home
            </Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>Empowering Excellence</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem", textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>TRAINING & DEVELOPMENT</h1>
        </div>
      </section>

      <section style={{ padding: "50px 20px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "80px", height: "80px", background: "rgba(229, 57, 53, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "20px" }}>Continuous Learning at RR</h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "40px" }}>
            At RR Construction, we believe that an investment in our people is an investment in our future. As construction methodologies evolve rapidly, we ensure our workforce is equipped with the latest technical knowledge and safety protocols through rigorous, continuous training programs.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>Technical Skills Enhancement</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>We conduct regular workshops for our engineers on advanced BIM (Building Information Modeling) software, modern structural design analysis, and GPS-guided machinery operation to maintain our edge as a leading engineering contractor.</p>
          </div>
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>HSE (Health, Safety & Environment)</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>Safety is non-negotiable. Every employee undergoes mandatory ISO 45001 safety induction and frequent refresher courses covering working at heights, hazard identification, and emergency response procedures.</p>
          </div>
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>Leadership Development</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>We identify high-potential individuals within our ranks and provide them with project management training, financial literacy workshops, and leadership seminars to groom the next generation of RR Construction leaders.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

