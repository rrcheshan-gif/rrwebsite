import Link from 'next/link';

export default function People() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/bg-2.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(15,23,42,0.4)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold" }}>← Back</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>Our Greatest Asset</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem" }}>OUR PEOPLE</h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "20px" }}>The Engine of RR Construction</h2>
          <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "0 auto 30px" }}></div>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "20px" }}>
            Infrastructure isn't built by machines; it's built by people. From our boardroom in Colombo to the furthest reaches of our highway projects, the RR Construction family consists of over <strong>1,800 dedicated professionals</strong>. We cultivate an environment that rewards precision, promotes safety, and encourages lifelong learning.
          </p>
        </div>
      </section>

      {/* Workforce Categories */}
      <section style={{ padding: "0 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center" }}>
            <div style={{ width: "80px", height: "80px", background: "rgba(37, 99, 235, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18h20"></path><path d="M12 2v7"></path><path d="M7 21v-3a5 5 0 0 1 10 0v3"></path><path d="M4 11h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2z"></path></svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>Engineering & Technical</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>Our core strength lies in our multidisciplinary team of chartered civil engineers, quantity surveyors, architects, and QA/QC specialists who ensure every project meets global engineering standards.</p>
          </div>

          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center" }}>
            <div style={{ width: "80px", height: "80px", background: "rgba(37, 99, 235, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>Skilled Trades & Operators</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>The backbone of our operations. We directly employ hundreds of highly trained heavy machinery operators, master masons, steel fixers, and asphalt technicians who bring designs to reality.</p>
          </div>

          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", textAlign: "center" }}>
            <div style={{ width: "80px", height: "80px", background: "rgba(37, 99, 235, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>Training & Development</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>We invest heavily in continuous professional development. From ISO safety training to advanced BIM software workshops, we ensure our team remains at the cutting edge of modern construction methodologies.</p>
          </div>
          
        </div>
      </section>

      {/* Join Us CTA */}
      <section style={{ 
        padding: "90px 20px", 
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", 
        color: "white", 
        textAlign: "center",
        position: "relative",
        borderTop: "4px solid var(--primary-red)",
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", marginBottom: "20px", color: "#ffffff", fontWeight: 700 }}>Build Your Career With Us</h2>
          <p style={{ color: "#cbd5e1", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 40px", lineHeight: 1.7 }}>Ready to engineer tomorrow? We are always looking for passionate engineers, project managers, and skilled tradespeople to join our growing team.</p>
          <Link href="/career" className="btn btn-primary" style={{ 
            display: "inline-block", 
            padding: "16px 38px", 
            background: "linear-gradient(135deg, var(--primary-red), var(--primary-dark-red))", 
            color: "#ffffff", 
            fontWeight: 700, 
            textTransform: "uppercase", 
            letterSpacing: "1.5px", 
            borderRadius: "8px", 
            textDecoration: "none",
            boxShadow: "0 8px 25px rgba(211, 47, 47, 0.4)",
            border: "none"
          }}>View Vacancies</Link>
        </div>
      </section>
    </div>
  );
}
