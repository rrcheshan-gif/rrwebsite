import Link from 'next/link';

export default function QualityPolicy() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/quality-policy.jpg')", padding: "100px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.65) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home
            </Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>Our Standards</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem", textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>QUALITY POLICY</h1>
        </div>
      </section>

      {/* ISO 9001 Section */}
      <section style={{ padding: "80px 20px" }}>
        <div className="container">
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ marginBottom: "20px", display: "inline-block", padding: "20px", background: "rgba(229, 57, 53, 0.1)", borderRadius: "50%" }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "30px" }}>Committed to ISO 9001:2015</h2>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "40px" }}>
              Quality is the cornerstone of RR Construction's legacy. As A leading civil engineering enterprise, we operate under a rigorous Quality Management System certified to <strong>ISO 9001:2015</strong> standards. Our policy ensures that every cubic meter of concrete poured, every kilometer of asphalt laid, and every structural beam erected meets uncompromising national and international engineering benchmarks.
            </p>
          </div>
          
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "8px", borderTop: "4px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "15px" }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
              <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "15px" }}>Material Testing</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>All construction materials—from aggregate and soil to steel and asphalt—undergo strict laboratory testing before site application to guarantee durability and compliance with standard engineering specifications.</p>
            </div>
            
            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "8px", borderTop: "4px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "15px" }}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><polyline points="9 14 11 16 15 12"></polyline></svg>
              <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "15px" }}>Process Auditing</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>Dedicated Quality Assurance (QA) engineers conduct daily site audits. We employ systematic checklists at every phase of the project lifecycle to eliminate defects and ensure structural integrity.</p>
            </div>
            
            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "8px", borderTop: "4px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "15px" }}><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
              <h3 style={{ color: "var(--text-dark)", fontSize: "1.4rem", marginBottom: "15px" }}>Continuous Improvement</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>We leverage advanced construction technologies and actively seek client feedback to continuously refine our engineering methodologies and elevate our service delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

