"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  
  return (
    <div style={{ marginTop: "30px" }}>
      <button 
        onClick={(e) => { e.preventDefault(); router.back(); }} 
        style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "8px", 
          color: "#fff", 
          textDecoration: "none", 
          fontWeight: 700, 
          fontSize: "0.95rem", 
          padding: "10px 24px", 
          background: "rgba(255,255,255,0.1)", 
          backdropFilter: "blur(10px)", 
          border: "1px solid rgba(255,255,255,0.2)", 
          borderRadius: "30px", 
          cursor: "pointer", 
          transition: "all 0.3s ease", 
          outline: "none" 
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.2)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
        }}
      >
        &larr; Back
      </button>
    </div>
  );
}
