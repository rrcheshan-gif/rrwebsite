"use client";

import Link from 'next/link';

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div style={{ paddingTop: "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/contact-connect.jpg')", padding: "100px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center 30%", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.65) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "4.5rem", margin: 0 }}>Get In Touch</h1>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section style={{ padding: "100px 20px", backgroundColor: "var(--bg-base)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "start" }}>
          
          <div>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <div style={{ width: "40px", height: "1px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Reach Out</h4>
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", color: "var(--text-dark)", marginBottom: "40px" }}>Contact Information</h2>
              
              <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "25px", display: "flex", gap: "25px", alignItems: "flex-start", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                <div style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "20px", borderRadius: "20px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "10px" }}>Main Office</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7 }}>No. 865, Dr. Danister de Silva MW,<br/>Baseline Road, Colombo 09,<br/>Orugodawatta.</p>
                </div>
              </div>

              <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", marginBottom: "25px", display: "flex", gap: "25px", alignItems: "flex-start", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                <div style={{ background: "rgba(100,116,139,0.1)", color: "#64748b", padding: "20px", borderRadius: "20px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "10px" }}>Workshop</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7 }}>No. 626C, Samurdhi Mw,<br/>Cheenagahawela, Heiyanthuduwa,<br/>Sapugaskanda.</p>
                </div>
              </div>

              <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", transition: "transform 0.4s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                <ul style={{ listStyle: "none", fontSize: "1.1rem", lineHeight: 2.2, margin: 0, padding: 0 }}>
                  <li style={{ display: "flex", gap: "15px", alignItems: "center", color: "var(--text-dark)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <strong>Tel:</strong> 011-2433427
                  </li>
                  <li style={{ display: "flex", gap: "15px", alignItems: "center", color: "var(--text-dark)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    <strong>Fax:</strong> 011-2430161
                  </li>
                  <li style={{ display: "flex", gap: "15px", alignItems: "center", color: "var(--text-dark)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <strong>Email:</strong> general@rrconstruction.lk
                  </li>
                  <li style={{ display: "flex", gap: "15px", alignItems: "center", color: "var(--text-dark)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <strong>Workshop Email:</strong> rrcworkshop@sltnet.lk
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)", color: "white", padding: "50px", borderRadius: "32px", boxShadow: "0 20px 50px rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "5px", background: "var(--primary-red)" }}></div>
              <h3 style={{ fontFamily: "var(--font-heading)", color: "white", marginBottom: "30px", fontSize: "2.2rem" }}>Send a Message</h3>
              
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "25px", position: "relative", zIndex: 2 }}>
                <div>
                  <label htmlFor="name" style={{ display: "block", marginBottom: "10px", color: "#94a3b8", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "1px" }}>Full Name</label>
                  <input type="text" id="name" name="name" style={{ width: "100%", padding: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", color: "white", borderRadius: "12px", fontSize: "1rem", outline: "none" }} required />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", marginBottom: "10px", color: "#94a3b8", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "1px" }}>Email Address</label>
                  <input type="email" id="email" name="email" style={{ width: "100%", padding: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", color: "white", borderRadius: "12px", fontSize: "1rem", outline: "none" }} required />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: "block", marginBottom: "10px", color: "#94a3b8", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "1px" }}>Phone Number <span style={{ opacity: 0.5, textTransform: "none", letterSpacing: "normal" }}>(optional)</span></label>
                  <input type="tel" id="phone" name="phone" style={{ width: "100%", padding: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", color: "white", borderRadius: "12px", fontSize: "1rem", outline: "none" }} />
                </div>
                <div>
                  <label htmlFor="subject" style={{ display: "block", marginBottom: "10px", color: "#94a3b8", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "1px" }}>Subject / Inquiry Type</label>
                  <select id="subject" name="subject" style={{ width: "100%", padding: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "#111", color: "white", borderRadius: "12px", fontSize: "1rem", outline: "none", cursor: "pointer" }}>
                    <option>General Inquiry</option>
                    <option>Project Consultation</option>
                    <option>Machinery Rental</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: "block", marginBottom: "10px", color: "#94a3b8", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "1px" }}>Message</label>
                  <textarea id="message" name="message" rows={5} style={{ width: "100%", padding: "16px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", color: "white", borderRadius: "12px", fontSize: "1rem", resize: "vertical", fontFamily: "inherit", outline: "none" }} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "15px", padding: "18px", fontSize: "1.1rem", borderRadius: "12px" }}>Send Message</button>
              </form>
            </div>

        </div>
      </section>
    </div>
  );
}

