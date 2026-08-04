import Link from 'next/link';

export default function Welfare() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/welfare-family.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold" }}>← Back</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px", textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>Caring For Our Family</h4>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem" }}>EMPLOYEE WELFARE</h1>
        </div>
      </section>

      <section style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "80px", height: "80px", background: "rgba(229, 57, 53, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path></svg>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "20px" }}>Beyond the Worksite</h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "40px" }}>
            The well-being of our 1,800+ workforce is our highest priority. We understand that our success is built on their hard work, and we are committed to providing a supportive, secure, and rewarding environment for them and their families.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "50px" }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
            <img className="img-polished img-hover-zoom" src="/images/page-headers/bg-6.jpg" alt="Health Benefits" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
          </div>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)', display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "20px", color: "var(--text-dark)" }}>Health & Medical Benefits</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Comprehensive medical insurance coverage for employees and their immediate families.</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Annual comprehensive health screening camps conducted at major project sites.</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>24/7 on-site medical officers and fully equipped first-aid facilities at all active construction zones.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container" style={{ maxWidth: "1200px", margin: "80px auto 0", display: "flex", flexWrap: "wrap-reverse", gap: "50px" }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)', display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "20px", color: "var(--text-dark)" }}>Financial & Social Support</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Subsidized high-quality meals and comfortable accommodation provided for remote site workers.</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Educational scholarships and support programs for the children of our long-serving staff members.</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Annual sports festivals, cultural events, and family days to foster community spirit.</span>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
            <img className="img-polished img-hover-zoom" src="/images/completed-hero.jpg" alt="Social Support" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
          </div>
        </div>
      </section>
    </div>
  );
}
