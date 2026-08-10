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

  const isHomePage = pathname === '/';

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 1366) {
      e.preventDefault();
      setActiveDropdown(prev => prev === name ? null : name);
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""} ${isHomePage ? "home-nav" : "default-nav"}`}>
        <div className="container">
          <nav className="navbar">
            <Link href="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
              <img src="/images/logo.png" alt="RR Construction Logo" className="nav-logo-img" />
              <div className="logo-text">
                <span className="logo-title">CONSTRUCTION</span>
                <span className="logo-sub">(PVT) LTD</span>
              </div>
            </Link>
            
            <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
              <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              
              <li className={`dropdown ${activeDropdown === 'about' ? 'open' : ''}`}>
                <div className="dropdown-header">
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                  <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('about', e)} aria-label="Toggle About Submenu">
                    <ChevronDown size={14} />
                  </button>
                </div>
                <ul className="dropdown-menu">
                  <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>Our Story</Link></li>
                  <li><Link href="/quality-policy" onClick={() => setMobileMenuOpen(false)}>Quality Policy</Link></li>
                  <li><Link href="/awards" onClick={() => setMobileMenuOpen(false)}>Awards & Recognitions</Link></li>
                </ul>
              </li>
              
              <li className={`dropdown ${activeDropdown === 'projects' ? 'open' : ''}`}>
                <div className="dropdown-header">
                  <Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                  <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('projects', e)} aria-label="Toggle Projects Submenu">
                    <ChevronDown size={14} />
                  </button>
                </div>
                <ul className="dropdown-menu">
                  <li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Completed Projects</Link></li>
                  <li><Link href="/ongoing" onClick={() => setMobileMenuOpen(false)}>Ongoing Projects</Link></li>
                </ul>
              </li>
              
              <li className={`dropdown ${activeDropdown === 'people' ? 'open' : ''}`}>
                <div className="dropdown-header">
                  <Link href="/people" onClick={() => setMobileMenuOpen(false)}>People</Link>
                  <button className="dropdown-toggle-btn" onClick={(e) => toggleDropdown('people', e)} aria-label="Toggle People Submenu">
                    <ChevronDown size={14} />
                  </button>
                </div>
                <ul className="dropdown-menu">
                  <li><Link href="/people" onClick={() => setMobileMenuOpen(false)}>Our People</Link></li>
                  <li><Link href="/training" onClick={() => setMobileMenuOpen(false)}>Training & Development</Link></li>
                  <li><Link href="/welfare" onClick={() => setMobileMenuOpen(false)}>Employee Welfare</Link></li>
                </ul>
              </li>
              
              <li><Link href="/quarries-aggregates" onClick={() => setMobileMenuOpen(false)}>Quarries & Aggregates</Link></li>
              <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
              <li><Link href="/sustainability" onClick={() => setMobileMenuOpen(false)}>Sustainability</Link></li>
              <li><Link href="/career" onClick={() => setMobileMenuOpen(false)}>Careers</Link></li>
              
              <li className="nav-extra-actions">
                <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
                <Link href="/contact" className="nav-contact-btn" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              </li>
            </ul>

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
