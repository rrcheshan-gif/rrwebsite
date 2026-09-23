"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    bg: "/images/page-headers/sustainability-road-hq.jpg",
    eyebrow: "Welcome",
    title: "A New Digital Era",
    subtitle: "RR Construction (Pvt) Ltd proudly presents its brand new official website.",
    accent: "#e53935",
  },
  {
    id: 2,
    bg: "/images/home/slider/polished/bridge.jpg",
    eyebrow: "30+ Years of Excellence",
    title: "Built on a Legacy\nof Engineering",
    subtitle: "From a small material supplier in the 1990s to Sri Lanka's premier heavy civil engineering contractor.",
    accent: "#e53935",
  },
  {
    id: 3,
    bg: "/images/service-maritime-wellamankara.jpg",
    eyebrow: "Our Services",
    title: "Every Major\nInfrastructure Domain",
    subtitle: "Highways · Bridges · Maritime · Dredging · Water Infrastructure · Landslide Mitigation · Piling · Railway",
    accent: "#e53935",
  },
  {
    id: 4,
    bg: "/images/page-headers/people-team-final.jpg",
    eyebrow: "Our People",
    title: "1,400+ Professionals\nOne Team",
    subtitle: "Engineers, operators, tradespeople, and leaders — united by one mission: Build Sri Lanka.",
    accent: "#e53935",
  },
  {
    id: 5,
    bg: "/images/about/key-data-hero.jpg",
    eyebrow: "By the Numbers",
    title: "Scale That\nSpeaks for Itself",
    subtitle: "1,000+ machines · CIDA CS2 Certified · ISO 9001 · ISO 14001 · ISO 45001",
    accent: "#e53935",
  },
  {
    id: 6,
    bg: "/images/about/head-office-building.jpg",
    eyebrow: "The Moment is Here",
    title: "Welcome to\nrrconstruction.lk",
    subtitle: "Click the button below to officially launch the new RR Construction website.",
    accent: "#e53935",
    isLaunch: true,
  },
];

export default function LaunchPage() {
  const [current, setCurrent] = useState(0);
  const [launched, setLaunched] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
    setAutoPlay(true);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setProgress(0);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    if (!autoPlay || launched) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [autoPlay, launched, next]);

  const handleLaunch = async () => {
    setLaunching(true);

    // Dynamically load confetti to avoid SSR issues
    const confetti = (await import("canvas-confetti")).default;

    const duration = 4000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 80,
        origin: { x: 0 },
        colors: ["#e53935", "#ffffff", "#1b2738", "#ffd700"],
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 80,
        origin: { x: 1 },
        colors: ["#e53935", "#ffffff", "#1b2738", "#ffd700"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();

    setTimeout(() => {
      setLaunched(true);
      setTimeout(() => {
        window.location.href = "https://www.rrconstruction.lk";
      }, 2000);
    }, 2500);
  };

  const slide = slides[current];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#000",
      fontFamily: "'Outfit', sans-serif",
      overflow: "hidden",
    }}>

      {/* Background Image with Ken Burns */}
      {slides.map((s, i) => (
        <div key={s.id} style={{
          position: "absolute", inset: 0,
          opacity: i === current ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${s.bg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: i === current ? "kenBurns 6s ease-out forwards" : "none",
          }} />
          {/* Dark Overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)",
          }} />
        </div>
      ))}

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;800;900&display=swap');

        @keyframes kenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(229, 57, 53, 0.5); }
          50% { box-shadow: 0 0 0 20px rgba(229, 57, 53, 0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .launch-btn:hover {
          transform: scale(1.06) !important;
          box-shadow: 0 20px 60px rgba(229,57,53,0.6) !important;
        }
      `}</style>

      {/* Top Logo Bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "24px 48px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
        zIndex: 10,
        animation: "fadeIn 1s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img src="/images/logo.png" alt="RR Construction" style={{ height: "48px", objectFit: "contain" }} />
        </div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase" }}>
          Website Launch {new Date().getFullYear()}
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start",
        padding: "0 8vw",
        zIndex: 5,
      }}>
        <div key={current} style={{ maxWidth: "750px" }}>
          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            background: "rgba(229,57,53,0.15)",
            border: "1px solid rgba(229,57,53,0.4)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "28px",
            animation: "fadeUp 0.7s ease forwards",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e53935" }} />
            <span style={{ color: "#e53935", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
              {slide.eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            color: "#ffffff",
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            margin: "0 0 24px",
            whiteSpace: "pre-line",
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            animation: "fadeUp 0.7s 0.15s ease both",
          }}>
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 0 48px",
            animation: "fadeUp 0.7s 0.3s ease both",
          }}>
            {slide.subtitle}
          </p>

          {/* LAUNCH BUTTON — only on last slide */}
          {(slide as any).isLaunch && !launched && (
            <button
              className="launch-btn"
              onClick={handleLaunch}
              disabled={launching}
              style={{
                background: launching ? "#555" : "linear-gradient(135deg, #e53935 0%, #b71c1c 100%)",
                color: "white",
                border: "none",
                borderRadius: "14px",
                padding: "22px 56px",
                fontSize: "1.35rem",
                fontWeight: 800,
                letterSpacing: "1px",
                cursor: launching ? "not-allowed" : "pointer",
                boxShadow: "0 12px 40px rgba(229,57,53,0.45)",
                animation: "fadeUp 0.7s 0.45s ease both, pulse 2s 1.2s infinite",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              {launching ? (
                <>
                  <div style={{
                    width: "24px", height: "24px", borderRadius: "50%",
                    border: "3px solid rgba(255,255,255,0.3)",
                    borderTopColor: "white",
                    animation: "spin 0.8s linear infinite",
                  }} />
                  Launching...
                </>
              ) : (
                <>
                  🚀 Launch rrconstruction.lk
                </>
              )}
            </button>
          )}

          {/* Launched message */}
          {launched && (
            <div style={{
              color: "#4ade80", fontSize: "1.5rem", fontWeight: 700,
              animation: "fadeUp 0.5s ease",
            }}>
              ✅ Launched! Redirecting...
            </div>
          )}
        </div>
      </div>

      {/* Bottom Controls */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "32px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
        zIndex: 10,
      }}>
        {/* Slide Dots */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => goTo(i)} style={{
              width: i === current ? "36px" : "10px",
              height: "10px",
              borderRadius: "100px",
              background: i === current ? "#e53935" : "rgba(255,255,255,0.35)",
              border: "none", cursor: "pointer",
              transition: "all 0.4s ease",
              padding: 0,
            }} />
          ))}
        </div>

        {/* Progress + Slide Counter */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", letterSpacing: "2px" }}>
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
          {/* Thin progress bar */}
          <div style={{ width: "120px", height: "3px", background: "rgba(255,255,255,0.2)", borderRadius: "2px" }}>
            <div style={{
              width: `${progress}%`, height: "100%",
              background: "#e53935", borderRadius: "2px",
              transition: "width 0.1s linear",
            }} />
          </div>
        </div>

        {/* Prev / Next */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button onClick={() => { setCurrent((c) => (c - 1 + slides.length) % slides.length); setProgress(0); }} style={{
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            color: "white", borderRadius: "50%", width: "44px", height: "44px",
            cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center",
          }}>‹</button>
          <button onClick={() => { next(); }} style={{
            background: "rgba(229,57,53,0.6)", border: "1px solid rgba(229,57,53,0.4)",
            color: "white", borderRadius: "50%", width: "44px", height: "44px",
            cursor: "pointer", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center",
          }}>›</button>
        </div>
      </div>
    </div>
  );
}
