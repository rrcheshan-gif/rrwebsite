"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Anchor, Shield, Droplets, Waves, PenTool } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function MaritimeConstructionPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{
          position: 'relative',
          padding: isMobile ? '40px 20px' : '70px 20px',
          backgroundImage: 'url("/images/page-headers/services-build.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(10, 15, 26, 0.75)',
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '10px', 
            marginBottom: '20px',
            fontSize: isMobile ? '14px' : '16px'
          }}>
            <Link href="/services" style={{ color: 'var(--white)', textDecoration: 'none', opacity: 0.8 }}>Services</Link>
            <span style={{ opacity: 0.8 }}>/</span>
            <span style={{ color: 'var(--primary-red)' }}>Maritime Construction</span>
          </div>
          <h1 style={{ 
            fontSize: isMobile ? '36px' : '56px', 
            fontWeight: 800, 
            marginBottom: '24px',
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.2
          }}>
            Maritime & Marine Construction <span style={{ color: 'var(--primary-red)' }}>in Sri Lanka</span>
          </h1>
          <p style={{ 
            fontSize: isMobile ? '16px' : '20px', 
            opacity: 0.9, 
            lineHeight: 1.6 
          }}>
            Expert harbour development, marine heavy civil engineering, and coastal infrastructure solutions.
          </p>
        </div>
      </section>

      {/* Maritime Construction Capabilities */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: isMobile ? '40px' : '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ 
                fontSize: isMobile ? '28px' : '36px', 
                color: 'var(--text-dark)', 
                marginBottom: '24px',
                fontFamily: 'var(--font-heading)'
              }}>
                Sri Lanka's Premier Maritime Constructor
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '20px' }}>
                RR Construction possesses the specialized equipment, technical expertise, and engineering capabilities required for complex marine environments.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '30px' }}>
                Our maritime division undertakes technically challenging projects from commercial ports and fishery harbours to coastal protection structures, delivering resilient infrastructure designed to withstand harsh marine conditions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  `Specialized in Maritime Construction`,
                  `ISO 9001:2015 Quality Management`,
                  `ISO 14001:2015 Environmental Management`,
                  `ISO 45001:2018 Occupational Health & Safety`
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <CheckCircle2 size={24} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '16px', color: 'var(--text-dark)', fontWeight: 600 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              position: 'relative',
              aspectRatio: '4/3'
            }}>
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                backgroundColor: 'var(--bg-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-light)'
              }}>
                [Maritime Image placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 style={{ 
              fontSize: isMobile ? '32px' : '42px', 
              color: 'var(--text-dark)', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Core Marine Capabilities
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-light)', lineHeight: 1.6 }}>
              Comprehensive engineering and construction services for all types of coastal and marine infrastructure.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {/* Service 1 */}
            <div style={{ 
              backgroundColor: 'var(--white)', 
              borderRadius: '24px', 
              padding: '40px 30px',
              border: '1px solid var(--border-soft)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: 'rgba(230, 57, 70, 0.1)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Anchor size={30} color="var(--primary-red)" />
              </div>
              <h3 style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                Harbour & Port Infrastructure
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                Design and construction of commercial ports, fishery harbours, jetties, and quay walls utilizing robust marine piling and reinforced concrete structures.
              </p>
            </div>

            {/* Service 2 */}
            <div style={{ 
              backgroundColor: 'var(--white)', 
              borderRadius: '24px', 
              padding: '40px 30px',
              border: '1px solid var(--border-soft)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: 'rgba(230, 57, 70, 0.1)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Waves size={30} color="var(--primary-red)" />
              </div>
              <h3 style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                Breakwaters & Coastal Protection
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                Construction of rock armour breakwaters, groynes, seawalls, and revetments to manage coastal erosion and protect marine assets from wave action.
              </p>
            </div>

            {/* Service 3 */}
            <div style={{ 
              backgroundColor: 'var(--white)', 
              borderRadius: '24px', 
              padding: '40px 30px',
              border: '1px solid var(--border-soft)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: 'rgba(230, 57, 70, 0.1)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <PenTool size={30} color="var(--primary-red)" />
              </div>
              <h3 style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                Marine Heavy Civil Engineering
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                Specialized subsea engineering including seabed preparation, offshore pile installation, and submerged concrete pouring for marine foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dredging & Reclamation Callout */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', backgroundColor: 'var(--white)' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          backgroundColor: 'var(--bg-light)',
          borderRadius: '24px',
          padding: isMobile ? '40px 20px' : '60px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <Droplets size={32} color="var(--primary-red)" />
              <h2 style={{ fontSize: isMobile ? '28px' : '36px', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', margin: 0 }}>
                Dredging & Reclamation
              </h2>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '20px' }}>
              We offer comprehensive dredging services for navigational channels, harbour basins, and land reclamation projects using specialized marine fleets.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--primary-red)" />
                <span style={{ fontSize: '15px', color: 'var(--text-dark)' }}>Capital & Maintenance Dredging</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--primary-red)" />
                <span style={{ fontSize: '15px', color: 'var(--text-dark)' }}>Land Reclamation & Sand Bypassing</span>
              </li>
            </ul>
            <Link href="/services/dredging-reclamation" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--primary-red)',
              color: 'var(--white)',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
              transition: 'background-color 0.3s ease'
            }}>
              View Dredging Services <ArrowRight size={20} />
            </Link>
          </div>
          <div style={{ 
            flexShrink: 0,
            width: isMobile ? '100%' : '400px',
            height: isMobile ? '250px' : '300px',
            backgroundColor: '#e2e8f0',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-light)'
          }}>
            [Dredging Image]
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexDirection: isMobile ? 'column' : 'row', gap: '20px' }}>
            <div>
              <h2 style={{ 
                fontSize: isMobile ? '32px' : '42px', 
                color: 'var(--text-dark)', 
                marginBottom: '16px',
                fontFamily: 'var(--font-heading)'
              }}>
                Selected Maritime Projects
              </h2>
              <p style={{ fontSize: '18px', color: 'var(--text-light)' }}>
                Demonstrating our capability in marine environments.
              </p>
            </div>
            <Link href="/projects" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--primary-red)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px'
            }}>
              View all projects <ArrowRight size={20} />
            </Link>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
            gap: '30px' 
          }}>
            {/* Project 1 */}
            <div style={{ 
              backgroundColor: 'var(--white)',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border-soft)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ 
                height: '240px', 
                backgroundColor: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-light)'
              }}>
                [Gandara Fishery Harbour Image]
              </div>
              <div style={{ padding: '30px' }}>
                <span style={{ 
                  display: 'inline-block',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(230, 57, 70, 0.1)',
                  color: 'var(--primary-red)',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}>
                  Harbour Construction
                </span>
                <h3 style={{ fontSize: '24px', color: 'var(--text-dark)', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                  Gandara Fishery Harbour
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Comprehensive construction of harbour facilities including breakwaters, quay walls, and dredging works to support the local fishing industry.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-red)', fontWeight: 600, fontSize: '15px' }}>
                  Read Case Study <ArrowRight size={16} />
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div style={{ 
              backgroundColor: 'var(--white)',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid var(--border-soft)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ 
                height: '240px', 
                backgroundColor: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-light)'
              }}>
                [Coastal Protection Image]
              </div>
              <div style={{ padding: '30px' }}>
                <span style={{ 
                  display: 'inline-block',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(230, 57, 70, 0.1)',
                  color: 'var(--primary-red)',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}>
                  Coastal Engineering
                </span>
                <h3 style={{ fontSize: '24px', color: 'var(--text-dark)', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                  Coastal Protection Systems
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Installation of coastal defence mechanisms including rock armouring and revetments for various infrastructure developments across the coastline.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-red)', fontWeight: 600, fontSize: '15px' }}>
                  View Project Category <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marine Equipment & Safety */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: isMobile ? '40px' : '80px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Anchor size={28} color="var(--primary-red)" />
                <h2 style={{ fontSize: isMobile ? '28px' : '36px', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', margin: 0 }}>
                  Specialized Marine Equipment
                </h2>
              </div>
              <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '24px' }}>
                Executing marine works requires highly specialized plant and machinery. Our internal fleet gives us operational control and reliability on the water.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {[
                  'Cutter Suction Dredgers',
                  'Marine Cranes',
                  'Pontoons & Barges',
                  'Tug Boats',
                  'Hydrographic Survey Equip.',
                  'Specialized Piling Rigs'
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={20} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '15px', color: 'var(--text-dark)' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Shield size={28} color="var(--primary-red)" />
                <h2 style={{ fontSize: isMobile ? '28px' : '36px', color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', margin: 0 }}>
                  Quality & Marine Safety
                </h2>
              </div>
              <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.8 }}>
                Working over water presents unique hazards. Our ISO 45001:2018 certified occupational health and safety protocols include stringent marine-specific safety measures, weather monitoring, and emergency response planning for all maritime operations.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gridTemplateRows: '1fr 1fr', 
              gap: '20px',
              height: '500px'
            }}>
              <div style={{ backgroundColor: '#e2e8f0', borderRadius: '24px', gridRow: '1 / 3' }}></div>
              <div style={{ backgroundColor: '#cbd5e1', borderRadius: '24px' }}></div>
              <div style={{ backgroundColor: '#94a3b8', borderRadius: '24px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: isMobile ? '32px' : '42px', 
              color: 'var(--text-dark)', 
              marginBottom: '16px',
              fontFamily: 'var(--font-heading)'
            }}>
              Frequently Asked Questions
            </h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <details style={{ 
              backgroundColor: 'var(--white)', 
              borderRadius: '16px', 
              padding: '20px', 
              border: '1px solid var(--border-soft)',
              cursor: 'pointer'
            }}>
              <summary style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-dark)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Do you provide coastal protection services?
                <span style={{ color: 'var(--primary-red)' }}>+</span>
              </summary>
              <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.7, marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--border-soft)' }}>
                Yes, we construct various coastal protection structures including rock armour breakwaters, groynes, seawalls, and revetments to manage coastal erosion.
              </p>
            </details>

            <details style={{ 
              backgroundColor: 'var(--white)', 
              borderRadius: '16px', 
              padding: '20px', 
              border: '1px solid var(--border-soft)',
              cursor: 'pointer'
            }}>
              <summary style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-dark)', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Are you equipped to handle underwater concrete pouring?
                <span style={{ color: 'var(--primary-red)' }}>+</span>
              </summary>
              <p style={{ fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.7, marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--border-soft)' }}>
                Yes, our marine heavy civil engineering teams are experienced in specialized concrete applications including tremie concrete placement for underwater foundations and structures.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 40px', backgroundColor: 'var(--white)' }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center',
          backgroundColor: 'var(--bg-light)',
          padding: isMobile ? '40px 20px' : '60px',
          borderRadius: '24px',
          border: '1px solid var(--border-soft)'
        }}>
          <h2 style={{ 
            fontSize: isMobile ? '32px' : '42px', 
            color: 'var(--text-dark)', 
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)'
          }}>
            Discuss Your Maritime Project
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '40px' }}>
            Contact our marine engineering team to discuss your harbour, coastal, or dredging requirements.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <Link href="/contact" style={{
              display: 'inline-block',
              backgroundColor: 'var(--primary-red)',
              color: 'var(--white)',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
              transition: 'background-color 0.3s ease'
            }}>
              Contact Us
            </Link>
            <Link href="/projects" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: 'var(--text-dark)',
              border: '1px solid var(--border-soft)',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}>
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
