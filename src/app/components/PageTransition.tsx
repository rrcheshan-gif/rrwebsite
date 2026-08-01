"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function PageTransitionContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // When the route changes, trigger the transition overlay
    setIsTransitioning(true);
    
    // The overlay lasts for 0.5 seconds (maximum speed as requested)
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [pathname, searchParams]); // Run every time the path or query changes

  if (!isTransitioning) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100dvh",
      backgroundColor: "var(--bg-light)",
      zIndex: 99999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      boxSizing: "border-box",
      animation: "revealOut 0.5s cubic-bezier(0.8, 0, 0.2, 1) forwards",
      pointerEvents: "none"
    }}>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        textAlign: "center",
        gap: "15px",
        maxWidth: "90vw",
        width: "100%",
        margin: "0 auto"
      }}>
        <img 
          src="/images/logo.png" 
          alt="RR Construction" 
          style={{ width: "clamp(150px, 45vw, 220px)", height: "auto", display: "block", margin: "0 auto" }} 
        />
        <h3 style={{ 
          color: "var(--primary-red)", 
          fontFamily: "var(--font-heading)", 
          fontSize: "clamp(0.8rem, 3.5vw, 1.05rem)", 
          fontWeight: 800, 
          letterSpacing: "1.5px", 
          textTransform: "uppercase",
          textAlign: "center",
          margin: "5px auto",
          width: "100%"
        }}>
          Passion for Engineering Excellence
        </h3>
        <div style={{
          width: "140px",
          height: "4px",
          background: "var(--border-soft)",
          borderRadius: "2px",
          overflow: "hidden",
          position: "relative",
          margin: "0 auto"
        }}>
          <div style={{
            position: "absolute",
            top: 0, left: 0, height: "100%",
            width: "50%",
            background: "var(--primary-red)",
            borderRadius: "2px",
            animation: "fastLoadingBar 0.5s ease-in-out forwards"
          }}></div>
        </div>
      </div>

      <style>{`
        @keyframes revealOut {
          0% { opacity: 1; transform: translateY(0); }
          60% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-3%); pointer-events: none; }
        }
        @keyframes fastLoadingBar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default function PageTransition() {
  return (
    <Suspense fallback={null}>
      <PageTransitionContent />
    </Suspense>
  );
}
