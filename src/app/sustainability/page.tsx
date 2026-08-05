import Link from 'next/link';

export default function Sustainability() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/sustainability-green.jpg')", padding: "100px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center 30%", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.65) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home
            </Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>Our Responsibility</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem", textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>SUSTAINABILITY & HSE</h1>
        </div>
      </section>

      {/* Health & Safety */}
      <section style={{ padding: "80px 20px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "50px", alignItems: "center" }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "20px" }}>Health & Safety (ISO 45001)</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", marginBottom: "20px" }}></div>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "20px" }}>
              At RR Construction, we believe that every worker deserves a safe environment. Our "Zero Harm" policy is not just a slogan; it is embedded in our daily operations across all sites. We are proudly certified under <strong>ISO 45001:2018 (Occupational Health and Safety Management Systems)</strong>.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
              <li style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>Rigorous safety inductions and continuous training for our 1,800+ workforce.</span>
              </li>
              <li style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>Mandatory daily tool-box talks and hazard identification protocols.</span>
              </li>
              <li style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.05rem" }}>Provision of high-quality Personal Protective Equipment (PPE) to all staff and site visitors.</span>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)', borderRadius: "8px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", height: "420px", position: "relative" }}>
            <img className="img-polished img-hover-zoom" src="/images/health-safety-site.jpg" alt="Health and Safety" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 55%" }} />
          </div>
        </div>
      </section>

      {/* Environmental Management */}
      <section style={{ padding: "80px 20px", background: "#0f172a", color: "white" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap-reverse", gap: "50px", alignItems: "center" }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
            <img className="img-polished img-hover-zoom" src="/images/thudugala-crusher-plant.jpg" alt="Environment" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", objectFit: "cover", objectPosition: "center" }} />
          </div>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "white", marginBottom: "20px" }}>Environmental Management (ISO 14001)</h2>
            <div style={{ width: "60px", height: "4px", background: "#4ade80", marginBottom: "20px" }}></div>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
              As a massive infrastructure developer, we acknowledge our footprint. RR Construction strictly adheres to <strong>ISO 14001:2015</strong> to ensure our projects harmonize with the natural environment.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                <span style={{ color: "#cbd5e1", fontSize: "1.05rem" }}><strong>Dust & Noise Control:</strong> Deployment of advanced suppression systems at all concrete and asphalt batching plants.</span>
              </li>
              <li style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                <span style={{ color: "#cbd5e1", fontSize: "1.05rem" }}><strong>Waste Management:</strong> Systematic recycling of construction debris and responsible disposal of hazardous materials.</span>
              </li>
              <li style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                <span style={{ color: "#cbd5e1", fontSize: "1.05rem" }}><strong>Resource Efficiency:</strong> Optimizing fuel usage across our 1,000+ machine fleet to reduce carbon emissions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Corporate Social Responsibility */}
      <section style={{ padding: "80px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "80px", height: "80px", background: "rgba(229, 57, 53, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path></svg>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "20px" }}>Community Impact (CSR)</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-light)" }}>
            We don't just build roads; we connect communities. Our CSR initiatives focus on uplifting the localities surrounding our mega-projects. We prioritize hiring local labor, providing vocational training for rural youth in construction trades, and engaging in infrastructure development for local schools and religious institutions. Building Sri Lanka means empowering its people.
          </p>
        </div>
      </section>
    </div>
  );
}

