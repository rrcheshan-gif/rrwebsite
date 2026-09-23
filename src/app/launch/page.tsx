"use client";

import { useEffect, useState, useCallback } from "react";

const slides = [
  {
    id: 1,
    type: "cover",
    bg: "/images/page-headers/sustainability-road-hq.jpg",
    logo: true,
    title: "RR Construction\n(Pvt) Ltd",
    subtitle: "Official Website Launch",
    year: "2026",
  },
  {
    id: 2,
    type: "stat",
    bg: "/images/home/slider/polished/bridge.jpg",
    eyebrow: "Our Story",
    title: "Three Decades of\nBuilding Sri Lanka",
    stats: [
      { value: "30+", label: "Years of Experience" },
      { value: "CS2", label: "CIDA Highest Grade" },
      { value: "1995", label: "Founded" },
      { value: "100%", label: "Sri Lankan Owned" },
    ],
  },
  {
    id: 3,
    type: "split",
    bg: "/images/home/slider/polished/bridge.jpg",
    eyebrow: "Our Scale",
    title: "A Workforce\nLike No Other",
    image: "/images/page-headers/people-team-final.jpg",
    points: [
      "1,400+ Dedicated Professionals",
      "1,000+ Heavy Construction Machines",
      "Island-wide Project Coverage",
      "ISO 9001 · ISO 14001 · ISO 45001",
    ],
  },
  {
    id: 4,
    type: "services",
    bg: "/images/page-headers/sustainability-road-hq.jpg",
    eyebrow: "What We Do",
    title: "Every Major\nInfrastructure Domain",
    services: [
      { icon: "🛣️", name: "Highways & Expressways" },
      { icon: "🌉", name: "Bridge Construction" },
      { icon: "⚓", name: "Maritime Construction" },
      { icon: "🌊", name: "Dredging & Reclamation" },
      { icon: "💧", name: "Water Infrastructure" },
      { icon: "⛰️", name: "Landslide Mitigation" },
      { icon: "🏗️", name: "Piling & Foundation" },
      { icon: "🚂", name: "Railway Civil Works" },
    ],
  },
  {
    id: 5,
    type: "projects",
    bg: "/images/home/slider/polished/maritime.jpg",
    eyebrow: "Notable Projects",
    title: "Landmark Infrastructure\nAcross the Nation",
    projects: [
      { name: "Central Expressway – Section 2", year: "2024" },
      { name: "Emergency Northern Railway Reconstruction", year: "2026" },
      { name: "Wellamankara Fishery Harbour", year: "2025" },
      { name: "Kurikadduvan Jetty Approach Road", year: "2026" },
      { name: "Vadduvakal Bridge Construction", year: "2023" },
    ],
  },
  {
    id: 6,
    type: "digital",
    bg: "/images/about/head-office-building.jpg",
    eyebrow: "Our Digital Future",
    title: "Introducing Our\nNew Digital Home",
    features: [
      "Complete Services & Projects Showcase",
      "AI-Powered Assistant",
      "Online Quote & Material Requests",
      "Career Application Portal",
      "News & Updates Hub",
    ],
  },
  {
    id: 7,
    type: "launch",
    bg: "/images/page-headers/sustainability-road-hq.jpg",
    title: "rrconstruction.lk",
    subtitle: "Click below to officially launch the website",
  },
];

export default function LaunchPage() {
  const [current, setCurrent] = useState(0);
  const [launched, setLaunched] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 400);
  }, [transitioning]);

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const handleLaunch = async () => {
    setLaunching(true);
    const confetti = (await import("canvas-confetti")).default;
    const duration = 5000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 8, angle: 60, spread: 90, origin: { x: 0 }, colors: ["#e53935", "#ffffff", "#1b2738", "#ffd700", "#e53935"] });
      confetti({ particleCount: 8, angle: 120, spread: 90, origin: { x: 1 }, colors: ["#e53935", "#ffffff", "#1b2738", "#ffd700", "#e53935"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
    setTimeout(() => {
      setLaunched(true);
      setTimeout(() => { window.open("https://www.rrconstruction.lk", "_blank"); }, 2000);
    }, 2500);
  };

  const slide = slides[current];
  const progress = ((current + 1) / slides.length) * 100;

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0a0e1a", fontFamily: "'Outfit', sans-serif", overflow: "hidden", userSelect: "none" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(229,57,53,0.5); } 50% { box-shadow: 0 0 0 24px rgba(229,57,53,0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.06); } }
        .slide-content { animation: ${transitioning ? "fadeOut 0.4s ease forwards" : "fadeIn 0.6s ease forwards"}; }
        .nav-btn:hover { background: rgba(229,57,53,0.3) !important; border-color: rgba(229,57,53,0.6) !important; }
        .launch-btn:hover:not(:disabled) { transform: scale(1.05) !important; box-shadow: 0 24px 70px rgba(229,57,53,0.7) !important; }
      `}</style>

      {/* BG Image */}
      <div key={current} style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `url('${(slide as any).bg}')`,
        backgroundSize: "cover", backgroundPosition: "center",
        animation: "kenBurns 8s ease-out forwards",
        opacity: 0.18,
      }} />

      {/* Top Bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/images/rr-logo.png" alt="RR" style={{ height: "36px", objectFit: "contain" }} onError={(e) => { (e.target as HTMLImageElement).src = "/images/logo.png"; }} />
          <div style={{ width: "1px", height: "28px", background: "rgba(255,255,255,0.15)" }} />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", letterSpacing: "2px", textTransform: "uppercase" }}>Website Launch Presentation</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", letterSpacing: "1px" }}>Press F for Fullscreen · ← →  Navigate</span>
          <button onClick={() => document.documentElement.requestFullscreen?.()} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", color: "rgba(255,255,255,0.5)", padding: "6px 14px", fontSize: "0.78rem", cursor: "pointer", letterSpacing: "1px" }}>⛶ FULLSCREEN</button>
        </div>
      </div>

      {/* Slide Content */}
      <div className="slide-content" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, padding: "80px 60px 80px" }}>

        {/* COVER SLIDE */}
        {slide.type === "cover" && (
          <div style={{ textAlign: "center", maxWidth: "900px" }}>
            <div style={{ marginBottom: "32px" }}>
              <img src="/images/rr-logo.png" alt="RR" style={{ height: "70px", objectFit: "contain", filter: "brightness(0) invert(1)" }} onError={(e) => { (e.target as HTMLImageElement).src = "/images/logo.png"; }} />
            </div>
            <div style={{ width: "60px", height: "3px", background: "#e53935", margin: "0 auto 32px" }} />
            <h1 style={{ color: "#fff", fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 900, lineHeight: 1.0, margin: "0 0 24px", whiteSpace: "pre-line", textShadow: "0 4px 40px rgba(0,0,0,0.4)" }}>
              {(slide as any).title}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(1.1rem, 3vw, 1.6rem)", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "48px" }}>{(slide as any).subtitle}</p>
            <div style={{ display: "inline-block", background: "rgba(229,57,53,0.12)", border: "1px solid rgba(229,57,53,0.3)", borderRadius: "100px", padding: "10px 28px", color: "#e53935", fontSize: "0.95rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 600 }}>
              {(slide as any).year}
            </div>
          </div>
        )}

        {/* STAT SLIDE */}
        {slide.type === "stat" && (
          <div style={{ width: "100%", maxWidth: "1100px" }}>
            <div style={{ marginBottom: "48px" }}>
              <div style={{ color: "#e53935", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, marginBottom: "16px" }}>{(slide as any).eyebrow}</div>
              <h2 style={{ color: "#fff", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, margin: 0, whiteSpace: "pre-line" }}>{slide.title}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              {(slide as any).stats?.map((s: any, i: number) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "36px 24px", textAlign: "center", borderTop: "3px solid #e53935" }}>
                  <div style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#e53935", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", marginTop: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SPLIT SLIDE */}
        {slide.type === "split" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", width: "100%", maxWidth: "1200px", alignItems: "center" }}>
            <div>
              <div style={{ color: "#e53935", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, marginBottom: "20px" }}>{(slide as any).eyebrow}</div>
              <h2 style={{ color: "#fff", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 40px", whiteSpace: "pre-line" }}>{slide.title}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {(slide as any).points?.map((p: string, i: number) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e53935", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.5)", border: "2px solid rgba(229,57,53,0.25)" }}>
              <img src={(slide as any).image} alt="Our People" style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center" }} />
            </div>
          </div>
        )}

        {/* SERVICES SLIDE */}
        {slide.type === "services" && (
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            <div style={{ marginBottom: "44px", textAlign: "center" }}>
              <div style={{ color: "#e53935", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, marginBottom: "16px" }}>{(slide as any).eyebrow}</div>
              <h2 style={{ color: "#fff", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.05, margin: 0, whiteSpace: "pre-line" }}>{slide.title}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
              {(slide as any).services?.map((s: any, i: number) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "28px 20px", textAlign: "center", transition: "all 0.2s" }}>
                  <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>{s.icon}</div>
                  <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.4 }}>{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECTS SLIDE */}
        {slide.type === "projects" && (
          <div style={{ width: "100%", maxWidth: "1000px" }}>
            <div style={{ marginBottom: "44px" }}>
              <div style={{ color: "#e53935", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, marginBottom: "16px" }}>{(slide as any).eyebrow}</div>
              <h2 style={{ color: "#fff", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.05, margin: 0, whiteSpace: "pre-line" }}>{slide.title}</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {(slide as any).projects?.map((p: any, i: number) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 28px", background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)", borderRadius: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(229,57,53,0.15)", border: "1px solid rgba(229,57,53,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#e53935", fontSize: "0.8rem", fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", fontWeight: 500 }}>{p.name}</span>
                  </div>
                  <span style={{ color: "#e53935", fontWeight: 700, fontSize: "0.95rem" }}>{p.year}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DIGITAL SLIDE */}
        {slide.type === "digital" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", width: "100%", maxWidth: "1200px", alignItems: "center" }}>
            <div>
              <div style={{ color: "#e53935", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, marginBottom: "20px" }}>{(slide as any).eyebrow}</div>
              <h2 style={{ color: "#fff", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 40px", whiteSpace: "pre-line" }}>{slide.title}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {(slide as any).features?.map((f: string, i: number) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(229,57,53,0.15)", border: "1px solid #e53935", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e53935" }} />
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(229,57,53,0.2)", borderRadius: "20px", padding: "48px", textAlign: "center" }}>
              <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🌐</div>
              <div style={{ color: "#e53935", fontWeight: 800, fontSize: "1.3rem", marginBottom: "10px" }}>rrconstruction.lk</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.7 }}>Sri Lanka's most comprehensive<br />heavy civil engineering<br />digital platform</div>
            </div>
          </div>
        )}

        {/* LAUNCH SLIDE */}
        {slide.type === "launch" && (
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "24px" }}>
              <img src="/images/rr-logo.png" alt="RR" style={{ height: "60px", objectFit: "contain", filter: "brightness(0) invert(1)" }} onError={(e) => { (e.target as HTMLImageElement).src = "/images/logo.png"; }} />
            </div>
            <div style={{ width: "60px", height: "3px", background: "#e53935", margin: "0 auto 28px" }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>Welcome to</p>
            <h1 style={{ color: "#ffffff", fontSize: "clamp(3rem, 9vw, 7rem)", fontWeight: 900, margin: "0 0 16px", textShadow: "0 0 80px rgba(229,57,53,0.3)" }}>
              {(slide as any).title}
            </h1>
            {!launched && (
              <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: "48px", fontSize: "1rem", letterSpacing: "1px" }}>{(slide as any).subtitle}</p>
            )}

            {!launched ? (
              <button
                className="launch-btn"
                onClick={handleLaunch}
                disabled={launching}
                style={{
                  background: launching ? "#333" : "linear-gradient(135deg, #e53935 0%, #b71c1c 100%)",
                  color: "white", border: "none", borderRadius: "16px",
                  padding: "24px 64px", fontSize: "1.4rem", fontWeight: 800,
                  letterSpacing: "1px", cursor: launching ? "not-allowed" : "pointer",
                  boxShadow: "0 16px 50px rgba(229,57,53,0.5)",
                  animation: launching ? "none" : "pulse 2.5s infinite",
                  transition: "all 0.25s",
                  display: "inline-flex", alignItems: "center", gap: "14px",
                }}
              >
                {launching ? (
                  <><div style={{ width: "22px", height: "22px", borderRadius: "50%", border: "3px solid rgba(255,255,255,0.3)", borderTopColor: "white", animation: "spin 0.8s linear infinite" }} /> Launching...</>
                ) : (
                  <> 🚀 Launch Website</>
                )}
              </button>
            ) : (
              <div style={{ animation: "fadeIn 0.6s ease", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ fontSize: "3.5rem" }}>🎊</div>
                <div style={{ color: "#4ade80", fontSize: "1.6rem", fontWeight: 800 }}>Successfully Launched!</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}>Opening rrconstruction.lk in new tab...</div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Bottom Controls Bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 40px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(10,14,26,0.8)", backdropFilter: "blur(10px)" }}>

        {/* Dot Navigation */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => goTo(i)} style={{
              width: i === current ? "28px" : "8px", height: "8px",
              borderRadius: "100px",
              background: i === current ? "#e53935" : i < current ? "rgba(229,57,53,0.35)" : "rgba(255,255,255,0.2)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.35s ease",
            }} />
          ))}
        </div>

        {/* Slide Count */}
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", letterSpacing: "2px", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          {String(current + 1).padStart(2, "0")} <span style={{ color: "rgba(255,255,255,0.15)" }}>/</span> {String(slides.length).padStart(2, "0")}
        </div>

        {/* Prev / Next */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="nav-btn" onClick={prev} disabled={current === 0} style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            color: current === 0 ? "rgba(255,255,255,0.2)" : "white", borderRadius: "10px",
            width: "42px", height: "42px", cursor: current === 0 ? "not-allowed" : "pointer",
            fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}>‹</button>
          <button className="nav-btn" onClick={next} disabled={current === slides.length - 1} style={{
            background: current === slides.length - 1 ? "rgba(255,255,255,0.06)" : "rgba(229,57,53,0.5)",
            border: "1px solid rgba(229,57,53,0.3)",
            color: current === slides.length - 1 ? "rgba(255,255,255,0.2)" : "white",
            borderRadius: "10px", width: "42px", height: "42px",
            cursor: current === slides.length - 1 ? "not-allowed" : "pointer",
            fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}>›</button>
        </div>
      </div>

      {/* Progress Line */}
      <div style={{ position: "absolute", bottom: "73px", left: 0, right: 0, height: "2px", background: "rgba(255,255,255,0.05)", zIndex: 21 }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "#e53935", transition: "width 0.4s ease" }} />
      </div>

    </div>
  );
}
