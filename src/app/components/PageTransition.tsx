"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      // First site load: show logo splash for 1.2s
      isInitialLoad.current = false;
      setIsTransitioning(true);
      setShowSplash(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      // Route change: fast 200ms fade — no blocking overlay
      setIsTransitioning(true);
      setShowSplash(false);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (!isTransitioning) return null;

  // Route change: minimal fade overlay
  if (!showSplash) {
    return (
      <div style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100dvh",
        backgroundColor: "var(--bg-light)",
        zIndex: 99999,
        pointerEvents: "none",
        animation: "quickFade 200ms ease-out forwards"
      }}>
        <style>{`
          @keyframes quickFade {
            0% { opacity: 0.4; }
            100% { opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // Initial load: full splash with logo
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100vw", height: "100dvh",
      backgroundColor: "var(--bg-light)",
      zIndex: 99999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      boxSizing: "border-box",
      animation: "revealOut 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards",
      pointerEvents: "none"
    }}>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        textAlign: "center",
        gap: "18px",
        maxWidth: "90vw",
        width: "100%",
        margin: "0 auto"
      }}>
        <img 
          src="/images/logo.png" 
          alt="RR Construction" 
          style={{ width: "clamp(160px, 45vw, 240px)", height: "auto", display: "block", margin: "0 auto" }} 
        />
        <h3 style={{ 
          color: "var(--primary-red)", 
          fontFamily: "var(--font-heading)", 
          fontSize: "clamp(0.85rem, 3.5vw, 1.1rem)", 
          fontWeight: 800, 
          letterSpacing: "2px", 
          
          textAlign: "center",
          margin: "5px auto",
          width: "100%"
        }}>
          Passion for Engineering Excellence
        </h3>
        <div style={{
          width: "160px",
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
            width: "0%",
            background: "var(--primary-red)",
            borderRadius: "2px",
            animation: "smoothLoadingBar 1.2s ease-in-out forwards"
          }}></div>
        </div>
      </div>

      <style>{`
        @keyframes revealOut {
          0% { opacity: 1; transform: scale(1); }
          75% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.02); pointer-events: none; }
        }
        @keyframes smoothLoadingBar {
          0% { width: 0%; }
          70% { width: 85%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
