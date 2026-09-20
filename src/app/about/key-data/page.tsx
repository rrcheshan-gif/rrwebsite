"use client";

import { useEffect, useState } from 'react';
import BackButton from "@/app/components/BackButton";

export default function KeyDataPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const dataList = [
    { label: "Year Established", value: "1995", subtitle: "Three decades of construction excellence in Sri Lanka." },
    { label: "Company Name", value: "RR Construction (Pvt) Ltd", subtitle: "" },
    { label: "Legal Status", value: "Private Limited Liability Company", subtitle: "" },
    { label: "Registration No", value: "PV 11346", subtitle: "" },
    { label: "National Grading", value: "CS2 (CIDA)", subtitle: "Highest National Grade in Buildings, Roads, Water Supply & Drainage, and Bridges." },
    { label: "Quality Standards", value: "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018", subtitle: "Certified for Quality Management, Environmental Management, and Occupational Health & Safety." },
    { label: "Direct Workforce", value: "1,400+", subtitle: "A dedicated team of engineers, technicians, and skilled professionals." },
    { label: "Machinery Units", value: "1,000+", subtitle: "State-of-the-art heavy equipment and self-owned asphalt plant fleet." },
    { label: "Managing Director", value: "Mr. Ranjith Senadeera", subtitle: "" },
    { label: "Head Office", value: "No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9.", subtitle: "" },
    { label: "Company Auditor", value: "P. Wijayawardana & Co.", subtitle: "" },
    { label: "Company Bankers", value: "HNB, DFCC, Sampath, NDB, Commercial, People's & NTB", subtitle: "" },
  ];

  return (
    <main style={{ backgroundColor: "var(--bg-light)", minHeight: "100vh" }}>

      {/* Hero Section */}
      <section className="page-header" style={{ position: 'relative', backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url('/images/page-headers/engineering-blueprint-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: isMobile ? '40px 20px' : '70px 20px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: isMobile ? '20px' : '40px', left: isMobile ? '20px' : '40px', zIndex: 10 }}>
          <BackButton />
        </div>
        <div style={{ maxWidth: "1500px", margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 4.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", lineHeight: 1.2 }}>
            Key <span style={{ color: "var(--primary-red)" }}>Data</span>
          </h1>
        </div>
      </section>

      {/* Pure Brutalist List Section - NO CARDS */}
      <section style={{ padding: isMobile ? '40px 20px 80px' : '80px 20px 120px', backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '60px', borderBottom: '2px solid var(--primary-red)', paddingBottom: '20px' }}>
             <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
               Corporate Particulars
             </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {dataList.map((item, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'baseline',
                padding: isMobile ? '30px 0' : '50px 0',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                gap: isMobile ? '12px' : '40px'
              }}>
                {/* Left Side: Label */}
                <div style={{ width: isMobile ? '100%' : '30%', flexShrink: 0 }}>
                  <h4 style={{ 
                    color: 'var(--primary-red)', 
                    fontWeight: 800, 
                    fontSize: '1rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    margin: 0 
                  }}>
                    {item.label}
                  </h4>
                </div>

                {/* Right Side: Value and Subtitle */}
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    color: 'var(--text-dark)', 
                    fontWeight: 800, 
                    fontFamily: 'var(--font-heading)',
                    fontSize: ['Year Established', 'Direct Workforce', 'Machinery Units', 'Registration No'].includes(item.label) ? 'clamp(2.5rem, 4vw, 4rem)' : 'clamp(1.5rem, 2.5vw, 2.2rem)',
                    lineHeight: 1.2,
                    marginBottom: item.subtitle ? '16px' : '0'
                  }}>
                    {item.value}
                  </div>
                  
                  {item.subtitle && (
                    <div style={{ 
                      color: 'var(--text-light)', 
                      fontSize: '1.2rem', 
                      fontWeight: 600,
                      lineHeight: 1.6,
                      maxWidth: '800px'
                    }}>
                      {item.subtitle}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
