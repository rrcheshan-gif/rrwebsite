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
                <span className="logo-title">RR CONSTRUCTION</span>
                <span className="logo-sub">(PVT) LTD</span>
              </div>
            </div>
            <p className="footer-bio">
              <strong>Passion for Engineering Excellence.</strong> A leading heavy civil engineering enterprise engineering the roads, bridges, and infrastructure that move Sri Lanka forward.
            </p>
            <div className="footer-social-pills">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="Twitter">TW</a>
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

        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} RR Construction (Pvt) Ltd. All Rights Reserved. Engineering the ground beneath tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
