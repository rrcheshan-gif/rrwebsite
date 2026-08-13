"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LandslideMitigationPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    hero: {
      position: 'relative' as const,
      backgroundImage: "url('/images/home/slider/polished/hatton.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: isMobile ? '40px 20px' : '70px 20px',
      color: 'var(--white)',
      textAlign: 'center' as const,
    },
    overlay: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1,
    },
    heroContent: {
      position: 'relative' as const,
      zIndex: 2,
      maxWidth: '800px',
      margin: '0 auto',
    },
    breadcrumb: {
      display: 'inline-block',
      color: 'var(--primary-red)',
      textDecoration: 'none',
      marginBottom: '20px',
      fontWeight: 'bold',
      fontSize: '14px',
      textTransform: 'uppercase' as const,
      letterSpacing: '1px',
    },
    h1: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: 800,
      marginBottom: '20px',
      lineHeight: 1.2,
      fontFamily: 'var(--font-heading)',
    },
    heroDesc: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      lineHeight: 1.6,
      opacity: 0.9,
    },
    section: {
      padding: isMobile ? '60px 10px' : '100px 20px',
    },
    bgLight: {
      backgroundColor: 'var(--bg-light)',
    },
    bgWhite: {
      backgroundColor: 'var(--white)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      color: 'var(--text-dark)',
      marginBottom: '20px',
      textAlign: 'center' as const,
      fontFamily: 'var(--font-heading)',
    },
    sectionDesc: {
      fontSize: '1.1rem',
      color: 'var(--text-light)',
      textAlign: 'center' as const,
      maxWidth: '800px',
      margin: '0 auto 50px',
      lineHeight: 1.8,
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '40px',
    },
    grid3: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '30px',
    },
    card: {
      backgroundColor: 'var(--white)',
      border: '1px solid var(--border-soft)',
      borderRadius: '24px',
      padding: '40px 30px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      height: '100%',
    },
    cardTitle: {
      fontSize: '1.5rem',
      color: 'var(--text-dark)',
      marginBottom: '15px',
      fontFamily: 'var(--font-heading)',
    },
    cardText: {
      color: 'var(--text-light)',
      lineHeight: 1.7,
      marginBottom: '0',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '15px',
      color: 'var(--text-light)',
      lineHeight: 1.6,
    },
    listIcon: {
      color: 'var(--primary-red)',
      marginRight: '15px',
      marginTop: '5px',
      flexShrink: 0,
    },
    faqItem: {
      backgroundColor: 'var(--white)',
      border: '1px solid var(--border-soft)',
      borderRadius: '16px',
      padding: '30px',
      marginBottom: '20px',
    },
    faqQ: {
      fontSize: '1.2rem',
      color: 'var(--text-dark)',
      fontWeight: 700,
      marginBottom: '15px',
      fontFamily: 'var(--font-heading)',
    },
    faqA: {
      color: 'var(--text-light)',
      lineHeight: 1.7,
      margin: 0,
    },
    ctaWrap: {
      textAlign: 'center' as const,
      marginTop: '40px',
    },
    btnPrimary: {
      display: 'inline-block',
      backgroundColor: 'var(--primary-red)',
      color: 'var(--white)',
      padding: '15px 40px',
      borderRadius: '30px',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      border: '2px solid var(--primary-red)',
      margin: '0 10px 10px',
    },
    btnOutline: {
      display: 'inline-block',
      backgroundColor: 'transparent',
      color: 'var(--primary-red)',
      padding: '15px 40px',
      borderRadius: '30px',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      border: '2px solid var(--primary-red)',
      margin: '0 10px 10px',
    }
  };

  const checkIcon = (
    <svg style={styles.listIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <main>
      {/* Hero Section */}
      <section style={styles.hero} className="page-header">
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <Link href="/services" style={styles.breadcrumb}>
            ← Back to Services
          </Link>
          <h1 style={styles.h1}>Landslide Mitigation &amp; <span style={{ color: 'var(--primary-red)' }}>Geotechnical Engineering</span> in Sri Lanka</h1>
          <p style={styles.heroDesc}>
            Comprehensive slope stabilization, retaining structures, and geotechnical solutions to protect infrastructure and communities in vulnerable regions.
          </p>
        </div>
      </section>

      {/* Geotechnical Capabilities Overview */}
      <section style={{ ...styles.section, ...styles.bgLight }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Geotechnical Capabilities Overview</h2>
          <p style={styles.sectionDesc}>
            RR Construction provides specialized geotechnical engineering services to mitigate landslide risks across Sri Lanka's hill country. We work in strict adherence to National Building Research Organisation (NBRO) guidelines and regulations, executing complex civil engineering countermeasures to ensure long-term structural integrity and public safety.
          </p>

          <div style={styles.grid3}>
            {/* Slope Stabilization */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Slope Stabilization</h3>
              <p style={styles.cardText}>
                We implement comprehensive slope stabilization measures including soil nailing, shotcreting, and surface/subsurface drainage systems to prevent deep-seated and shallow slope failures.
              </p>
            </div>

            {/* Retaining Structures */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Retaining Structures</h3>
              <p style={styles.cardText}>
                Our teams construct robust gabion walls, gravity retaining walls, and reinforced earth walls designed to withstand significant lateral earth pressures and provide critical toe support to unstable slopes.
              </p>
            </div>

            {/* Rock-fall Protection */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Rock-fall Protection</h3>
              <p style={styles.cardText}>
                Installation of high-tensile rock-fall nets and catch fences to protect transport corridors and critical infrastructure from unpredictable rock mass detachments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Road Disaster Countermeasures & Key Project Areas */}
      <section style={{ ...styles.section, ...styles.bgWhite }}>
        <div style={styles.container}>
          <div style={styles.grid2}>
            <div>
              <h2 style={{ ...styles.sectionTitle, textAlign: 'left' }}>Road Disaster Countermeasures</h2>
              <p style={{ ...styles.cardText, marginBottom: '20px' }}>
                A significant portion of our geotechnical work involves emergency slope repair and preventative landslide mitigation on national roads. We have extensive experience executing road disaster countermeasures, ensuring that critical transport links remain open and safe.
              </p>
              <p style={styles.cardText}>
                Our expertise in this sector is backed by works carried out under Japanese JICA technical assistance programs, bringing international best practices to local landslide mitigation efforts.
              </p>
            </div>
            <div>
              <h2 style={{ ...styles.sectionTitle, textAlign: 'left' }}>Key Project Areas</h2>
              <p style={{ ...styles.cardText, marginBottom: '20px' }}>
                We have successfully executed complex landslide mitigation projects across highly vulnerable regions in Sri Lanka's central highlands:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  {checkIcon}
                  <span><strong>Nuwara Eliya District:</strong> Extensive stabilization works in high-altitude terrain.</span>
                </li>
                <li style={styles.listItem}>
                  {checkIcon}
                  <span><strong>Hatton-Nuwara Eliya Corridor:</strong> Protection of critical road networks from recurring slope failures.</span>
                </li>
                <li style={styles.listItem}>
                  {checkIcon}
                  <span><strong>Kandy Region &amp; Central Hills:</strong> Implementation of comprehensive drainage and retaining systems.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Landslide Vulnerability Assessment & Quality */}
      <section style={{ ...styles.section, ...styles.bgLight }}>
        <div style={styles.container}>
          <div style={styles.grid2}>
            <div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Landslide Vulnerability Assessment</h3>
                <p style={styles.cardText}>
                  Before initiating structural interventions, we conduct detailed site assessments guided by the National Building Research Organisation (NBRO) parameters. This ensures our mitigation designs address the specific geological and hydrological characteristics of the site, providing optimal, long-lasting solutions.
                </p>
              </div>
            </div>
            <div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Quality &amp; Safety Compliance</h3>
                <p style={styles.cardText}>
                  Geotechnical engineering in hazardous terrain demands uncompromising safety standards. Our operations adhere strictly to ISO-certified safety protocols, mitigating risks to both our workforce and the surrounding environment while delivering structural solutions that meet all regulatory compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ ...styles.section, ...styles.bgWhite }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p style={styles.sectionDesc}>Common queries about our geotechnical and landslide mitigation services.</p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQ}>Do you handle NBRO approvals?</h4>
              <p style={styles.faqA}>While NBRO is the statutory authority issuing guidelines and approvals, we work closely within their regulatory framework. Our mitigation designs and execution methods comply entirely with NBRO standards, facilitating smooth project progression.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQ}>What techniques do you use for slope stabilization?</h4>
              <p style={styles.faqA}>We employ a range of techniques tailored to the specific site conditions, including soil nailing, shotcrete application, installation of horizontal gravity drains, surface drainage improvements, and various retaining wall structures.</p>
            </div>
            <div style={styles.faqItem}>
              <h4 style={styles.faqQ}>Have you worked on foreign-funded mitigation projects?</h4>
              <p style={styles.faqA}>Yes, RR Construction has substantial experience executing specialized landslide mitigation works under Japanese JICA technical assistance programs, adhering to stringent international quality and safety benchmarks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ ...styles.section, ...styles.bgLight, textAlign: 'center' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Require Geotechnical Expertise?</h2>
          <p style={styles.sectionDesc}>
            Contact our engineering team to discuss customized landslide mitigation solutions and slope stabilization strategies for your infrastructure projects.
          </p>
          <div style={styles.ctaWrap}>
            <Link href="/projects" style={styles.btnOutline}>
              View Our Projects
            </Link>
            <Link href="/contact" style={styles.btnPrimary}>
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
