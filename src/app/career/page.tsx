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
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/careers-join.jpg')", padding: "100px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center 30%", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.65) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>← Back</Link>
          </div>
          <h1 className="career-hero-title">Build Your Career With Us</h1>
        </div>
      </section>

      {/* Careers Content */}
      <section style={{ padding: "60px 20px", background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: "var(--primary-red)", marginBottom: "20px" }}>Build Your Future With Us</h2>
            <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", color: "var(--text-light)", lineHeight: 1.8 }}>Our 1,800-strong team is made up of people who take pride in getting it right — technically sound, hands-on, and committed to the work. If that sounds like you, we're always looking for passionate professionals ready to help shape Sri Lanka's infrastructure.</p>
          </div>

          <div className="career-grid">
            {/* Current Openings */}
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", marginBottom: "30px", borderBottom: "2px solid var(--primary-red)", paddingBottom: "10px", display: "inline-block", color: "var(--text-dark)" }}>Current Openings</h3>
              
              <div className="career-job-card">
                <div className="career-job-header">
                  <h4 style={{ fontSize: "1.3rem", color: "var(--primary-red)", fontFamily: "var(--font-heading)", margin: 0 }}>Project Manager (Civil)</h4>
                  <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "5px 12px", borderRadius: "15px", fontSize: "0.8rem", fontWeight: 600 }}>Full Time</span>
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Colombo / Site Locations
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>B.Sc. in Civil Engineering with minimum 10 years of experience in large-scale road and bridge projects.</p>
              </div>

              <div className="career-job-card">
                <div className="career-job-header">
                  <h4 style={{ fontSize: "1.3rem", color: "var(--primary-red)", fontFamily: "var(--font-heading)", margin: 0 }}>Site Engineer</h4>
                  <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "5px 12px", borderRadius: "15px", fontSize: "0.8rem", fontWeight: 600 }}>Full Time</span>
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Various Project Sites
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>B.Sc. Engineering or NDES/HNDE/NCT with 3+ years experience in maritime or highway construction.</p>
              </div>

              <div className="career-job-card">
                <div className="career-job-header">
                  <h4 style={{ fontSize: "1.3rem", color: "var(--primary-red)", fontFamily: "var(--font-heading)", margin: 0 }}>Heavy Machinery Operator</h4>
                  <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "5px 12px", borderRadius: "15px", fontSize: "0.8rem", fontWeight: 600 }}>Contract</span>
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Island-wide
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>Valid heavy vehicle license with minimum 5 years experience operating Excavators or Motor Graders.</p>
              </div>
            </div>

            {/* Application Form */}
            <div>
              <div className="career-form-card">
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", marginBottom: "25px", color: "var(--text-dark)" }}>Submit Your Application</h3>
                
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", marginBottom: "8px", fontWeight: 500, color: "var(--text-dark)" }}>Full Name</label>
                    <input type="text" required style={{ width: "100%", padding: "12px", border: "1px solid var(--input-border)", borderRadius: "8px", background: "var(--input-bg)", color: "var(--text-dark)" }} />
                  </div>
                  <div className="career-form-grid">
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
