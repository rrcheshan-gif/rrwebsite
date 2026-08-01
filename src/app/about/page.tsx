"use client";

export default function About() {
  return (
    <div style={{ paddingTop: "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/about-hero.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h4 style={{ fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "15px", color: "var(--primary-red)" }}>Who We Are</h4>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "4rem", color: "white", margin: 0 }}>OUR STORY</h1>
        </div>
      </section>

      {/* MD Message */}
      <section className="container" style={{ padding: "100px 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "80px", alignItems: "center" }}>
          
          {/* MD Picture */}
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)', display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", bottom: "-30px", right: "20px", background: "var(--primary-red)", color: "white", padding: "20px 30px", borderRadius: "20px", zIndex: 3, boxShadow: "0 15px 30px rgba(229, 57, 53, 0.3)" }}>
              <h4 style={{ margin: 0, fontSize: "1.5rem", fontFamily: "var(--font-heading)" }}>30+ Years</h4>
              <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 600 }}>of Engineering Leadership</p>
            </div>
            <div style={{ padding: "12px", background: "var(--white)", borderRadius: "32px", width: "100%", maxWidth: "450px", boxShadow: "0 20px 50px rgba(0,0,0,0.08)", position: "relative", zIndex: 2, border: "3px solid var(--primary-red)" }}>
              <div className="portrait-polished" style={{ width: "100%", height: "500px", background: "var(--border-soft)", borderRadius: "24px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src="/images/director_hd.jpg" 
                  alt="Mr. Ranjith Senadeera - Managing Director" 
                  className="img-polished" 
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", filter: "contrast(105%) saturate(108%)" }} 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://rrconstruction.lk/images/director_hd.jpg'; }} 
                />
              </div>
            </div>
          </div>

          <div style={{ flex: 1.5, minWidth: 'min(100%, 350px)' }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
              <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
              <h3 style={{ color: "var(--primary-red)", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "2px", margin: 0, fontWeight: 700 }}>Message from the Managing Director</h3>
            </div>
            <h2 style={{ fontSize: "3.5rem", color: "var(--text-dark)", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>Mr. Ranjith Senadeera</h2>
            <h4 style={{ color: "var(--text-light)", fontSize: "1.15rem", fontWeight: 500, marginBottom: "40px", borderBottom: "1px solid var(--border-soft)", paddingBottom: "30px" }}>
              B.Sc. Engineering (Hons), M.Eng., CEng, MIE (Sri Lanka)<br/>
              <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--primary-red)", display: "inline-block", marginTop: "10px" }}>Managing Director - RR Construction (Pvt) Ltd</span>
            </h4>
            
            <div style={{ position: "relative", paddingLeft: "50px", borderLeft: "4px solid var(--primary-red)", marginBottom: "30px" }}>
              <span style={{ position: "absolute", left: "15px", top: "-20px", fontSize: "5rem", color: "rgba(229,57,53,0.1)", fontFamily: "var(--font-heading)", lineHeight: 1 }}>"</span>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "var(--text-dark)", fontWeight: 500, marginBottom: "25px", position: "relative", zIndex: 1 }}>
                When RR Construction was founded in 1995, our vision was clear: to deliver engineering excellence without compromise. Today, as a leading civil engineering enterprise, we stand proud of our contribution to Sri Lanka's infrastructure — from expressways to vital water treatment facilities.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.9, color: "var(--text-dark)", fontWeight: 500, position: "relative", zIndex: 1 }}>
                We measure success the way our clients do: the right quality, delivered on schedule, at a fair cost. This philosophy, backed by our financial strength and dedicated workforce, ensures that we remain an engineering powerhouse ready for tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Info */}
      <section style={{ padding: "100px 20px", background: "linear-gradient(to bottom, #0a0a0a, #111)", color: "white" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "60px", justifyContent: "space-between" }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", marginBottom: "20px" }}>Corporate Information</h3>
            <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.8 }}>Key organizational details and statutory information of RR Construction (Pvt) Ltd.</p>
          </div>
          <div style={{ flex: 2, minWidth: 'min(100%, 300px)', display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px" }}>
            {[{ label: "Company Name", value: "RR Construction (Pvt) Ltd" },
              { label: "Established", value: "1995" },
              { label: "Company Reg No", value: "PV 11346" },
              { label: "VAT Reg No", value: "114324604 7000" },
              { label: "Auditor", value: "P. Wijayawardana & Co." },
              { label: "Bankers", value: "HNB, DFCC, Sampath, NDB, Commercial, Peoples Bank, NTB" }
            ].map((info, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.02)", padding: "30px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", borderLeft: "4px solid var(--primary-red)", transition: "transform 0.3s ease", cursor: "default" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                <strong style={{ color: "#94a3b8", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>{info.label}</strong>
                <div style={{ fontSize: "1.2rem", marginTop: "10px", fontWeight: 500 }}>{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Management */}
      <section style={{ padding: "100px 20px", background: "var(--bg-base)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)" }}>BOARD OF MANAGEMENT</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto" }}></div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            
            <div style={{ background: "var(--bg-light)", padding: "40px 30px", textAlign: "center", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <img 
                src="/images/director_hd.jpg" 
                alt="Mr. Ranjith Senadeera" 
                className="portrait-polished img-polished" 
                style={{ width: 'min(100%, 120px)', height: "120px", borderRadius: "50%", objectFit: "cover", objectPosition: "top center", border: "3px solid var(--primary-red)", marginBottom: "20px" }} 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://rrconstruction.lk/images/director_hd.jpg'; }} 
              />
              <h3 style={{ color: "var(--text-dark)", fontSize: "1.5rem", marginBottom: "5px", fontFamily: "var(--font-heading)" }}>Mr. Ranjith Senadeera</h3>
              <p style={{ color: "var(--primary-red)", fontWeight: 600, marginBottom: "15px", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px" }}>Managing Director</p>
              <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6 }}>A visionary civil engineer with decades of experience steering monumental infrastructure projects across Sri Lanka.</p>
            </div>
            
            <div style={{ background: "var(--bg-light)", padding: "40px 30px", textAlign: "center", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <img src="/images/gamage.jpg" alt="Mr. S.R. Gamage" className="portrait-polished img-polished" style={{ width: 'min(100%, 120px)', height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "20px" }} />
              <h3 style={{ color: "var(--text-dark)", fontSize: "1.5rem", marginBottom: "5px", fontFamily: "var(--font-heading)" }}>Mr. S.R. Gamage</h3>
              <p style={{ color: "var(--primary-red)", fontWeight: 600, marginBottom: "15px", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px" }}>General Manager (Operations)</p>
              <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6 }}>Spearheads field operations, ensuring all sites are equipped, manned, and running strictly to schedule and quality standards.</p>
            </div>

            <div style={{ background: "var(--bg-light)", padding: "40px 30px", textAlign: "center", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ width: 'min(100%, 120px)', height: "120px", borderRadius: "50%", background: "var(--bg-base)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: "4px solid var(--border-soft)" }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 style={{ color: "var(--text-dark)", fontSize: "1.5rem", marginBottom: "5px", fontFamily: "var(--font-heading)" }}>Mr. Ajith P. Galahitiyawa</h3>
              <p style={{ color: "var(--primary-red)", fontWeight: 600, marginBottom: "15px", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "1px" }}>General Manager (Contracts)</p>
              <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6 }}>Oversees tender processes, contract administration, and client relations, safeguarding corporate interests and compliance.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
