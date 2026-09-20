"use client";

import { useEffect, useState } from 'react';
import BackButton from "@/app/components/BackButton";
import { CheckCircle2 } from "lucide-react";

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

  const highlights = [
    { num: "1995", title: "Year Established", desc: "Three decades of construction excellence." },
    { num: "1,400+", title: "Direct Workforce", desc: "Dedicated professionals and skilled engineers." },
    { num: "1,000+", title: "Machinery Units", desc: "State-of-the-art heavy equipment fleet." }
  ];

  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-card {
          background: var(--bg-light);
          border-radius: 24px;
          border: 1px solid var(--border-soft);
          padding: 40px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeSlideUp 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 56px rgba(0,0,0,0.1);
          border-color: var(--primary-red);
        }
        .list-card {
          background: var(--white);
          border-radius: 24px;
          border: 1px solid var(--border-soft);
          padding: 40px;
          box-shadow: 0 28px 56px rgba(0,0,0,0.05);
        }
      `}</style>

      {/* Hero Section */}
      <section className="page-header" style={{ position: 'relative', backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/images/page-headers/engineering-blueprint-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)', padding: isMobile ? '40px 20px' : '70px 20px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: isMobile ? '20px' : '40px', left: isMobile ? '20px' : '40px', zIndex: 10 }}>
          <BackButton />
        </div>
        <div style={{ maxWidth: "1500px", margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>CORPORATE FACT SHEET</span>
              <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", lineHeight: 1.2 }}>
            Key <span style={{ color: "var(--primary-red)" }}>Data</span>
          </h1>
        </div>
      </section>

      {/* Stats Grid Section (Matching Services Layout) */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '30px' }}>
            {highlights.map((item, idx) => (
              <div key={idx} className="stat-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontFamily: 'var(--font-heading)', fontWeight: 900, color: 'var(--primary-red)', margin: '0 0 10px 0', lineHeight: 1 }}>{item.num}</h3>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-light)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* List Section (Matching Services Deep Dive Layout) */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr', gap: isMobile ? '40px' : '80px', alignItems: 'center' }}>
            
            {/* Left Side: Headings */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
                <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '2px',  fontSize: '0.85rem' }}>CORPORATE PARTICULARS</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '24px', lineHeight: 1.2 }}>
                The Foundation of Our <span style={{ color: 'var(--primary-red)' }}>Operations</span>
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
                RR Construction (Pvt) Ltd is a fully independent and recognized legal entity operating under the highest national and international standards. Below are our key corporate details and certifications.
              </p>
            </div>

            {/* Right Side: Clean List Card */}
            <div className="list-card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {dataList.map((item, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    gap: '16px',
                    paddingBottom: idx === dataList.length - 1 ? '0' : '20px',
                    borderBottom: idx === dataList.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.06)'
                  }}>
                    <CheckCircle2 size={24} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%', gap: isMobile ? '4px' : '20px' }}>
                      <span style={{ width: isMobile ? '100%' : '180px', color: 'var(--text-light)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', flexShrink: 0 }}>
                        {item.label}
                      </span>
                      <span style={{ color: 'var(--text-dark)', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.5 }}>
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
