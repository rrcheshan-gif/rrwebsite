"use client";

import Link from 'next/link';

export default function Career() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application! If your profile matches our requirements, our HR team will contact you.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/careers-hero.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold" }}>← Back</Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "3.5rem" }}>Build Your Career With Us</h1>
        </div>
      </section>

      {/* Careers Content */}
      <section style={{ padding: "80px 20px", background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--primary-red)", marginBottom: "20px" }}>Build Your Future With Us</h2>
            <p style={{ fontSize: "1.2rem", color: "var(--text-light)", lineHeight: 1.8 }}>Our 1,800-strong team is made up of people who take pride in getting it right — technically sound, hands-on, and committed to the work. If that sounds like you, we're always looking for passionate professionals ready to help shape Sri Lanka's infrastructure.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px" }}>
            {/* Current Openings */}
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", marginBottom: "30px", borderBottom: "2px solid var(--primary-red)", paddingBottom: "10px", display: "inline-block", color: "var(--text-dark)" }}>Current Openings</h3>
              
              <div style={{ background: "var(--white)", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", marginBottom: "20px", padding: "25px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                  <h4 style={{ fontSize: "1.3rem", color: "var(--primary-red)", fontFamily: "var(--font-heading)" }}>Project Manager (Civil)</h4>
                  <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "5px 12px", borderRadius: "15px", fontSize: "0.8rem", fontWeight: 600 }}>Full Time</span>
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "15px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Colombo / Site Locations
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6 }}>B.Sc. in Civil Engineering with minimum 10 years of experience in large-scale road and bridge projects.</p>
              </div>

              <div style={{ background: "var(--white)", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", marginBottom: "20px", padding: "25px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                  <h4 style={{ fontSize: "1.3rem", color: "var(--primary-red)", fontFamily: "var(--font-heading)" }}>Site Engineer</h4>
                  <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "5px 12px", borderRadius: "15px", fontSize: "0.8rem", fontWeight: 600 }}>Full Time</span>
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "15px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Various Project Sites
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6 }}>B.Sc. Engineering or NDES/HNDE/NCT with 3+ years experience in maritime or highway construction.</p>
              </div>

              <div style={{ background: "var(--white)", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", padding: "25px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                  <h4 style={{ fontSize: "1.3rem", color: "var(--primary-red)", fontFamily: "var(--font-heading)" }}>Heavy Machinery Operator</h4>
                  <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "5px 12px", borderRadius: "15px", fontSize: "0.8rem", fontWeight: 600 }}>Contract</span>
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "15px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Island-wide
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6 }}>Valid heavy vehicle license with minimum 5 years experience operating Excavators or Motor Graders.</p>
              </div>
            </div>

            {/* Application Form */}
            <div>
              <div style={{ padding: "40px", background: "var(--white)", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderTop: "5px solid var(--primary-red)" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", marginBottom: "25px", color: "var(--text-dark)" }}>Submit Your Application</h3>
                
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: 500, color: "var(--text-dark)" }}>Full Name</label>
                    <input type="text" required style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", borderRadius: "8px", background: "var(--input-bg)", color: "var(--text-dark)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                    <div>
                      <label style={{ display: "block", marginBottom: "8px", fontWeight: 500, color: "var(--text-dark)" }}>Email</label>
                      <input type="email" required style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", borderRadius: "8px", background: "var(--input-bg)", color: "var(--text-dark)" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", marginBottom: "8px", fontWeight: 500, color: "var(--text-dark)" }}>Phone Number</label>
                      <input type="tel" required style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", borderRadius: "8px", background: "var(--input-bg)", color: "var(--text-dark)" }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: 500, color: "var(--text-dark)" }}>Position Applied For</label>
                    <select required style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", borderRadius: "8px", background: "var(--input-bg)", color: "var(--text-dark)" }}>
                      <option value="">Select a position...</option>
                      <option value="Project Manager">Project Manager (Civil)</option>
                      <option value="Site Engineer">Site Engineer</option>
                      <option value="Heavy Machinery Operator">Heavy Machinery Operator</option>
                      <option value="Quantity Surveyor">Quantity Surveyor</option>
                      <option value="Other">Other / General Application</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: "30px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: 500, color: "var(--text-dark)" }}>Upload CV/Resume (PDF)</label>
                    <input type="file" accept=".pdf,.doc,.docx" required style={{ width: "100%", padding: "10px", border: "1px dashed var(--input-border)", borderRadius: "8px", background: "var(--input-bg)", color: "var(--text-dark)" }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Submit Application</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
