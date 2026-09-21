"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  
  return (
    <div style={{ marginBottom: "25px", display: "inline-block" }}>
      <button 
        onClick={(e) => { e.preventDefault(); router.back(); }} 
        style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "8px", 
          color: "#fff", 
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: "8px 16px",
          borderRadius: "30px",
          fontWeight: 600, 
          fontSize: "0.9rem", 
          cursor: "pointer", 
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", 
          outline: "none",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
        }}
      >
        <ArrowLeft size={16} strokeWidth={2.5} /> Back
      </button>
    </div>
  );
}
