"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useTheme } from "./ThemeProvider";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  
  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };
  
  const isExactActive = (path) => pathname === path;

  const isHomePage = true; // Always apply home-nav style (liquid glass) to all pages

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 1200) {
      e.preventDefault();
      setActiveDropdown(prev => prev === name ? null : name);
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? "scrolled" : "home-nav"}`}>
        <div className="container">
          <nav className="navbar">
            <a href="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
              <img src="/images/logo.png" alt="RR Construction Logo" className="nav-logo-img" />
                <div className="logo-text">
                  <span className="logo-title">Construction</span>
                  <span className="logo-sub">(Pvt) Ltd</span>
                  </div>
              </a>
            
            <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
              <li><a href="/" onClick={() => setMobileMenuOpen(false)} className={isActive("/") ? "active" : ""}>Home</a></li>
              
              <li className={`dropdown ${activeDropdown === 'about' ? 'open' : ''}`}>
                <div className="dropdown-header">
                  <Link href="/about" title="Leading Construction Company in Sri Lanka" onClick={() => setMobileMenuOpen(false)} className={isActive("/about") ? "active" : ""}>About Us</Link>
                  <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('about', e)} aria-label="Toggle About Submenu">
                    <ChevronDown size={14} />
                  </button>
                </div>
                <ul className="dropdown-menu">
                  <li><Link href="/about/company-overview" onClick={() => setMobileMenuOpen(false)}>RR Overview</Link></li>
                  <li><Link href="/about/key-data" onClick={() => setMobileMenuOpen(false)}>Key Data</Link></li>
                  <li><Link href="/about/history" onClick={() => setMobileMenuOpen(false)}>History &amp; Milestones</Link></li>
                  <li><Link href="/about/our-management" onClick={() => setMobileMenuOpen(false)}>Our Management</Link></li>
                  <li><Link href="/about/vision-mission" onClick={() => setMobileMenuOpen(false)}>Vision &amp; Mission</Link></li>
                  <li><Link href="/about/goals-and-targets" onClick={() => setMobileMenuOpen(false)}>Goals &amp; Targets</Link></li>
                  <li><Link href="/about/awards" onClick={() => setMobileMenuOpen(false)}>Awards &amp; Certificates</Link></li>
                </ul>
              </li>
              
              <li className={`dropdown ${activeDropdown === 'projects' ? 'open' : ''}`}>
                <div className="dropdown-header">
                  <Link href="/projects" title="Major Infrastructure &amp; Heavy Civil Engineering Projects Sri Lanka" onClick={() => setMobileMenuOpen(false)} className={isActive("/projects") ? "active" : ""}>Projects</Link>
                  <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('projects', e)} aria-label="Toggle Projects Submenu">
                    <ChevronDown size={14} />
                  </button>
                </div>
                <ul className="dropdown-menu">
                  <li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Completed Projects</Link></li>
                  <li><Link href="/projects/overseas" onClick={() => setMobileMenuOpen(false)}>Overseas Projects</Link></li>
                  <li><Link href="/projects/ongoing" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>
                </ul>
              </li>
              
              <li className={`dropdown ${activeDropdown === 'people' ? 'open' : ''}`}>
                <div className="dropdown-header">
                  <Link href="/people" title="Heavy Civil Engineering Workforce Sri Lanka" onClick={() => setMobileMenuOpen(false)} className={isActive("/people") ? "active" : ""}>People</Link>
                  <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('people', e)} aria-label="Toggle People Submenu">
                    <ChevronDown size={14} />
                  </button>
                </div>
                <ul className="dropdown-menu">
                  <li><Link href="/people" onClick={() => setMobileMenuOpen(false)}>Our People</Link></li>
                  <li><Link href="/training" onClick={() => setMobileMenuOpen(false)}>Training &amp; Development</Link></li>
                  <li><Link href="/welfare" onClick={() => setMobileMenuOpen(false)}>Employee Welfare</Link></li>
                  <li><Link href="/career" onClick={() => setMobileMenuOpen(false)}>Careers</Link></li>
                </ul>
              </li>
              
              <li className={`dropdown ${activeDropdown === 'services' ? 'open' : ''}`}>
                <div className="dropdown-header">
                  <Link href="/services/transportation-civil-infrastructure" title="Top Construction &amp; Engineering Services Sri Lanka" onClick={() => setMobileMenuOpen(false)} className={isActive("/services") ? "active" : ""}>Technology &amp; Services</Link>
                  <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('services', e)} aria-label="Toggle Services Submenu">
                    <ChevronDown size={14} />
                  </button>
                </div>                <ul className="dropdown-menu">
                  <li><Link href="/services/transportation-civil-infrastructure" onClick={() => setMobileMenuOpen(false)}>Transportation &amp; Civil Infrastructure</Link></li>
                  <li><Link href="/services/maritime-construction" onClick={() => setMobileMenuOpen(false)}>Marine &amp; Harbour Construction</Link></li>
                  <li><Link href="/services/landslide-mitigation" onClick={() => setMobileMenuOpen(false)}>Slope Stabilization &amp; Landslide Mitigation</Link></li>
                  <li><Link href="/services/piling-and-foundation-engineering" onClick={() => setMobileMenuOpen(false)}>Piling &amp; Foundation Engineering</Link></li>
                  <li><Link href="/services/dredging-and-water-infrastructure" onClick={() => setMobileMenuOpen(false)}>Dredging &amp; Water Infrastructure</Link></li>
                  <li><Link href="/services/railway-civil-works" onClick={() => setMobileMenuOpen(false)}>Railway Civil Works</Link></li>
                  <li><Link href="/services/research-development" onClick={() => setMobileMenuOpen(false)}>Research &amp; Development</Link></li>
                </ul>
              </li>

                              <li className={`dropdown ${activeDropdown === 'resources' ? 'open' : ''}`}>
                  <div className="dropdown-header">
                    <Link href="/resources/asphalt" title="Construction Resources Sri Lanka" onClick={() => setMobileMenuOpen(false)} className={isActive("/resources") ? "active" : ""}>Resources</Link>
                    <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('resources', e)} aria-label="Toggle Resources Submenu">
                      <ChevronDown size={14} />
                    </button>
                  </div>
                  <ul className="dropdown-menu">
                    <li><Link href="/resources/asphalt" onClick={() => setMobileMenuOpen(false)}>Asphalt Plants</Link></li>
                    <li><Link href="/resources/aggregates" onClick={() => setMobileMenuOpen(false)}>Aggregates & Sand</Link></li>
                    <li><Link href="/resources/concrete" onClick={() => setMobileMenuOpen(false)}>Concrete</Link></li>
                      <li style={{ borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: "5px", paddingTop: "5px" }}><Link href="/resources/request-order" onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--primary-red)", fontWeight: "bold" }}>Request Your Order &rarr;</Link></li>
                  </ul>
                </li>
                
                <li className={`dropdown ${activeDropdown === 'sustainability' ? 'open' : ''}`}>
                <div className="dropdown-header">
                  <Link href="/sustainability/environmental-stewardship" title="Sustainable Construction Practices Sri Lanka" onClick={() => setMobileMenuOpen(false)} className={isActive("/sustainability") ? "active" : ""}>Sustainability</Link>
                  <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('sustainability', e)} aria-label="Toggle Sustainability Submenu">
                    <ChevronDown size={14} />
                  </button>
                </div>
                <ul className="dropdown-menu">
                  <li><Link href="/sustainability/environmental-stewardship" onClick={() => setMobileMenuOpen(false)}>Environmental Stewardship</Link></li>
                  <li><Link href="/sustainability/health-and-safety" onClick={() => setMobileMenuOpen(false)}>Health &amp; Safety (HSE)</Link></li>
                  <li><Link href="/sustainability/quality-management" onClick={() => setMobileMenuOpen(false)}>Quality Management</Link></li>
                  <li><Link href="/sustainability/social-responsibility" onClick={() => setMobileMenuOpen(false)}>Social Responsibility</Link></li>
                </ul>
              </li>

              <li><Link href="/news" title="Construction Industry News Sri Lanka" onClick={() => setMobileMenuOpen(false)} className={isActive("/news") ? "active" : ""}>News &amp; Updates</Link></li>
              <li className="mobile-contact-item" style={{ marginTop: "15px", paddingTop: "15px", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                <Link href="/contact" className="mobile-contact-link" onClick={() => setMobileMenuOpen(false)} style={{ display: "block", textAlign: "center", background: "var(--primary-red)", color: "white", padding: "14px 24px", borderRadius: "30px", fontWeight: 700, textDecoration: "none" }}>Contact Us</Link>
              </li>
            </ul>

            {/* Desktop: Theme toggle + Contact Us — outside ul, always in nav row */}
            <div className="nav-desktop-actions">
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <Link href="/contact" title="Contact Top Construction Contractors in Sri Lanka" className="nav-contact-btn" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </div>

            {/* Mobile: Theme toggle + Hamburger */}
            <div className="nav-right-mobile flex items-center gap-3">
              <button onClick={toggleTheme} className="theme-toggle mobile-only-toggle" aria-label="Toggle Dark Mode">
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button 
                className="mobile-menu-btn" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-overlay ${mobileMenuOpen ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}></div>
    </>
  );
}
