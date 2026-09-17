import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content-wrapper">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col footer-brand-col">
            <div className="footer-logo-container">
              <div className="logo-box">
                <img src="/images/logo.png" alt="RR Construction Logo" />
              </div>
              <div className="footer-logo-text">
                <span className="logo-title" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Construction</span>
                <span className="logo-sub" style={{ fontFamily: "'Times New Roman', Times, serif" }}>(Pvt) Ltd</span>
              </div>
            </div>
            <p className="footer-bio">
              <strong>Passion for Engineering Excellence.</strong>
            </p>
            <div className="footer-social-pills">
              <a href="https://web.facebook.com/profile.php?id=61594119435109" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" aria-label="LinkedIn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="#" aria-label="Twitter" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link href="/about/company-overview">Corporate Profile</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/projects">Projects Portfolio</Link></li>
              <li><Link href="/career">Careers</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Head Office */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-heading">Head Office</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>No. 865, Dr. Danister de Silva MW, Baseline Road, Colombo 09</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <span><a href="tel:+94112433427" style={{ color: 'inherit', textDecoration: 'none' }}>011-2433427</a></span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <span><a href="mailto:general@rrconstruction.lk" style={{ color: 'inherit', textDecoration: 'none' }}>general@rrconstruction.lk</a></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar" style={{ textAlign: "center" }}>
          <p style={{ textAlign: "center", width: "100%" }}>&copy; {new Date().getFullYear()} RR Construction (Pvt) Ltd. All Rights Reserved. Engineering the ground beneath tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
