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
    { label: "Company Name", value: "RR Construction (Pvt) Ltd" },
    { label: "Legal Status", value: "Private Limited Liability Company" },
    { label: "Registration No", value: "PV 11346" },
    { label: "National Grading", value: "CS2 (CIDA) - Highest Grade in Buildings, Roads, Water Supply & Drainage, Bridges" },
    { label: "Managing Director", value: "Mr. Ranjith Senadeera" },
    { label: "Quality Standards", value: "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018" },
    { label: "Head Office", value: "No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9." },
    { label: "Company Auditor", value: "P. Wijayawardana & Co." },
    { label: "Bankers", value: "HNB, DFCC, Sampath, NDB, Commercial, People's & NTB" },
  ];

  return (
    <main style={{ backgroundColor: "var(--bg-light)", minHeight: "100vh" }}>
      
      {/* Hero Section */}
      <section className="page-header" style={{ position: 'relative', backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/images/page-headers/engineering-blueprint-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: isMobile ? '40px 20px' : '70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: "1500px", margin: '0 auto', width: '100%', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
            <BackButton />
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2.5rem' : '4rem', margin: '0 0 10px', lineHeight: 1.1, fontWeight: 800 }}>
            Corporate <span style={{ color: 'var(--primary-red)' }}>Key Data</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>
            The structural foundation of RR Construction
          </p>
        </div>
      </section>

      {/* Split Layout */}
      <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1.8fr', minHeight: '70vh' }}>
        
        {/* Left Dark Column - The Massive Stats */}
        <div style={{ background: 'var(--bg-base)', padding: isMobile ? '60px 30px' : '100px 80px', color: 'var(--white)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ width: '40px', height: '4px', background: 'var(--primary-red)', marginBottom: '40px' }} />
            
            <div style={{ marginBottom: '60px' }}>
                <h3 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--primary-red)', margin: '0 0 5px 0', lineHeight: 1 }}>1995</h3>
                <p style={{ fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: 0, fontWeight: 700 }}>Year Established</p>
            </div>

            <div style={{ marginBottom: '60px' }}>
                <h3 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--white)', margin: '0 0 5px 0', lineHeight: 1 }}>1,400<span style={{color: 'var(--primary-red)'}}>+</span></h3>
                <p style={{ fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: 0, fontWeight: 700 }}>Direct Workforce</p>
            </div>

            <div>
                <h3 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--white)', margin: '0 0 5px 0', lineHeight: 1 }}>1,000<span style={{color: 'var(--primary-red)'}}>+</span></h3>
                <p style={{ fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: 0, fontWeight: 700 }}>Machinery Units</p>
            </div>
        </div>

        {/* Right White Column - The Clean Corporate List */}
        <div style={{ background: 'var(--white)', padding: isMobile ? '50px 20px' : '100px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '40px' }}>Corporate Particulars</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {dataList.map((item, idx) => (
                    <div key={idx} style={{ 
                        display: 'flex', 
                        flexDirection: isMobile ? 'column' : 'row',
                        padding: '24px 0',
                        borderBottom: idx === dataList.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.08)',
                        gap: isMobile ? '8px' : '40px'
                    }}>
                        <div style={{ width: isMobile ? '100%' : '30%', flexShrink: 0 }}>
                            <span style={{ color: 'var(--primary-red)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                {item.label}
                            </span>
                        </div>
                        <div style={{ flex: 1 }}>
                            <span style={{ color: 'var(--text-dark)', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.5 }}>
                                {item.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>

      </section>
    </main>
  );
}
