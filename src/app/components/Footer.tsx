"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/launch') return null;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content-wrapper">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col footer-brand-col">
            <div className="footer-logo-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
                <div className="logo-box">
                  <img src="/images/logo.png" alt="RR Construction Logo" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: '6px', paddingLeft: '5px' }}>
                  <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '1.4rem', color: '#fff', fontWeight: 'normal', lineHeight: 1 }}>Construction</span>
                  <span style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '0.9rem', color: 'var(--primary-red)', fontWeight: 'bold', letterSpacing: '1px' }}>(Pvt) Ltd</span>
                </div>
              </div>
            <p className="footer-bio">
              <strong>Passion for Engineering Excellence.</strong>
            </p>
            <div className="footer-social-pills">
              <a href="https://web.facebook.com/profile.php?id=61594119435109" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" aria-label="LinkedIn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="https://www.instagram.com/rrconstruction.lk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="https://www.youtube.com/channel/UCU-yPH_MK4Vxf3bElCZ2RmQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
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
                <span className="contact-icon">ðŸ“</span>
                <span>No. 865, Dr. Danister de Silva MW, Baseline Road, Colombo 09</span>
              </li>
              <li>
                <span className="contact-icon">ðŸ“ž</span>
                <span><a href="tel:+94112433427" style={{ color: 'inherit', textDecoration: 'none' }}>011-2433427</a></span>
              </li>
              <li>
                <span className="contact-icon">âœ‰ï¸</span>
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



