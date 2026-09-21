"use client";

import { useEffect, useState } from 'react';
import BackButton from "@/app/components/BackButton";
import { Building2, Hash, Scale, FileText, Award, Users, Tractor, Briefcase, MapPin, Landmark } from 'lucide-react';
import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function KeyDataPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const dataList = [
    { label: "Year Established", value: "1995", icon: <Building2 size={28} strokeWidth={1.5} /> },
    { label: "Company Name", value: "RR Construction (Pvt) Ltd", icon: <Briefcase size={28} strokeWidth={1.5} /> },
    { label: "Legal Status", value: "Private Limited Liability Company", icon: <Scale size={28} strokeWidth={1.5} /> },
    { label: "Registration No", value: "PV 11346", icon: <Hash size={28} strokeWidth={1.5} /> },
    { label: "National Grading", value: "CS2 (CIDA) - Highest Grade in Buildings, Roads, Water, Bridges", icon: <Award size={28} strokeWidth={1.5} /> },
    { label: "Quality Standards", value: "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018", icon: <FileText size={28} strokeWidth={1.5} /> },
    { label: "Direct Workforce", value: "1,400+", icon: <Users size={28} strokeWidth={1.5} /> },
    { label: "Machinery Units", value: "1,000+", icon: <Tractor size={28} strokeWidth={1.5} /> },
    { label: "Head Office", value: "No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9.", icon: <MapPin size={28} strokeWidth={1.5} /> },
    { label: "Company Bankers", value: "HNB, DFCC, Sampath, NDB, Commercial, People's & NTB", icon: <Landmark size={28} strokeWidth={1.5} /> },
  ];

  return (
    <main style={{ backgroundColor: "var(--white)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="page-header" style={{ position: 'relative', backgroundImage: "url('/images/home/slider-bridge-mahanama.jpg')", backgroundColor: "#1b2738", backgroundSize: "max(55vw, 1100px) auto", backgroundRepeat: "no-repeat", backgroundPosition: "right center", color: 'var(--white)', padding: isMobile ? "120px 20px 20px" : "160px 20px 20px", minHeight: isMobile ? "400px" : "600px", display: "flex", flexDirection: "column", justifyContent: "flex-end", textAlign: 'left' }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <BackButton />
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", textAlign: "left" }}>
            Key <span style={{ color: "var(--primary-red)" }}>Data</span>
          </h1>
          <AutoBreadcrumb />
          
        </div>
      </section>

      {/* Beautiful Icon List Design */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {dataList.map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: isMobile ? 'flex-start' : 'center',
                flexDirection: isMobile ? 'column' : 'row',
                paddingBottom: '30px',
                borderBottom: idx === dataList.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.06)',
                gap: isMobile ? '15px' : '30px'
              }}>
                {/* Icon Container */}
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'rgba(229, 57, 53, 0.08)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--primary-red)',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%', gap: isMobile ? '5px' : '30px', alignItems: isMobile ? 'flex-start' : 'center' }}>
                  <div style={{ width: isMobile ? '100%' : '200px', flexShrink: 0 }}>
                    <h4 style={{ 
                      color: 'var(--text-light)', 
                      fontWeight: 700, 
                      fontSize: '0.9rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1px', 
                      margin: 0 
                    }}>
                      {item.label}
                    </h4>
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <p style={{ 
                      color: 'var(--text-dark)', 
                      fontWeight: 800, 
                      fontSize: '1.25rem', 
                      margin: 0,
                      lineHeight: 1.4,
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
