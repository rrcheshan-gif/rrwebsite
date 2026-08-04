import Link from 'next/link';

export default function Awards() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/awards-recognition.jpg')", padding: "100px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center 30%", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.65) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>← Back</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>Excellence Honoured</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem", textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>AWARDS & RECOGNITIONS</h1>
        </div>
      </section>

      {/* CIDA C1 Grading */}
      <section style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 'min(100%, 100px)', height: "100px", background: "rgba(139, 30, 30, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 30px" }}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "20px" }}>PREMIER ENGINEERING ENTERPRISE</h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "20px" }}>
            RR Construction stands as a premier infrastructure partner in Sri Lanka. Our extensive fleet of machinery, robust financial backing, and proven track record enable us to execute complex mega-infrastructure projects with engineering precision and speed.
          </p>
        </div>
      </section>

      {/* National Awards */}
      <section style={{ padding: "80px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "40px", color: "var(--text-dark)", textAlign: "center" }}>National Construction Awards</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderLeft: "5px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, marginBottom: "10px", fontSize: "1.2rem" }}>Excellence in Highway Construction</h4>
              <p style={{ color: "var(--text-dark)", fontWeight: 600, marginBottom: "15px" }}>National Construction Excellence Awards</p>
              <p style={{ color: "var(--text-light)", lineHeight: 1.6 }}>Awarded for the timely and high-quality delivery of the Central Expressway (Section 2, Package A), demonstrating exceptional project management and asphalt laying precision.</p>
            </div>
            
            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderLeft: "5px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, marginBottom: "10px", fontSize: "1.2rem" }}>Best Maritime Infrastructure Project</h4>
              <p style={{ color: "var(--text-dark)", fontWeight: 600, marginBottom: "15px" }}>Sri Lanka Engineering Awards</p>
              <p style={{ color: "var(--text-light)", lineHeight: 1.6 }}>Recognized for the complex dredging and breakwater engineering executed at the Gandara Fishery Harbour, overcoming severe monsoonal challenges.</p>
            </div>

            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderLeft: "5px solid var(--primary-red)" }}>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, marginBottom: "10px", fontSize: "1.2rem" }}>Outstanding Safety Record</h4>
              <p style={{ color: "var(--text-dark)", fontWeight: 600, marginBottom: "15px" }}>HSE Corporate Awards</p>
              <p style={{ color: "var(--text-light)", lineHeight: 1.6 }}>Honoured for achieving over 2 million man-hours without a Lost Time Injury (LTI) across all active water treatment and road construction sites in 2025.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
