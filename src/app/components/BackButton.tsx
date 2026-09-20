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
          background: "none",
          border: "none",
          padding: 0,
          fontWeight: 600, 
          fontSize: "0.95rem", 
          cursor: "pointer", 
          transition: "all 0.3s ease", 
          outline: "none",
          opacity: 0.8
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.textDecoration = "underline";
          e.currentTarget.style.transform = "translateX(-3px)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = "0.8";
          e.currentTarget.style.textDecoration = "none";
          e.currentTarget.style.transform = "translateX(0)";
        }}
      >
        &larr; Back
      </button>
    </div>
  );
}
