"use client";

import React, { useState, useEffect, useId } from "react";
import { ShieldCheck, RotateCw, CheckCircle2 } from "lucide-react";

interface CaptchaValueProps {
  onVerify?: (isValid: boolean, data?: { answer: string; expected: number; a: number; b: number }) => void;
  theme?: "light" | "dark";
  resetTrigger?: number; // pass incrementing number from parent to regenerate
}

export default function CaptchaValue({
  onVerify,
  theme = "light",
  resetTrigger = 0,
}: CaptchaValueProps) {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const inputId = useId();

  // Generate new math problem
  const generateCaptcha = () => {
    setIsRotating(true);
    const a = Math.floor(Math.random() * 9) + 2; // 2 to 10
    const b = Math.floor(Math.random() * 9) + 1; // 1 to 9
    setNumA(a);
    setNumB(b);
    setUserAnswer("");
    if (onVerify) {
      onVerify(false, undefined);
    }
    setTimeout(() => setIsRotating(false), 400);
  };

  useEffect(() => {
    generateCaptcha();
  }, [resetTrigger]);

  const expected = numA + numB;
  const isCorrect = userAnswer.trim() !== "" && parseInt(userAnswer, 10) === expected;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserAnswer(val);

    const valid = val.trim() !== "" && parseInt(val, 10) === expected;
    if (onVerify) {
      onVerify(valid, valid ? { answer: val, expected, a: numA, b: numB } : undefined);
    }
  };

  const isDark = theme === "dark";

  return (
    <div
      style={{
        padding: "16px 18px",
        borderRadius: "12px",
        background: isDark ? "rgba(255, 255, 255, 0.03)" : "#f8fafc",
        border: isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        boxSizing: "border-box",
        width: "100%",
        fontFamily: "inherit",
      }}
    >
      {/* Hidden inputs so any FormData(form) automatically receives these values */}
      <input type="hidden" name="captchaAnswer" value={userAnswer} />
      <input type="hidden" name="captchaExpected" value={expected > 0 ? String(expected) : ""} />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ShieldCheck
            size={18}
            style={{ color: isCorrect ? "#10b981" : "var(--primary-red, #dc2626)" }}
          />
          <span
            style={{
              fontSize: "0.88rem",
              fontWeight: 600,
              color: isDark ? "#e2e8f0" : "#334155",
              letterSpacing: "0.3px",
            }}
          >
            Human Verification (CAPTCHA)
          </span>
        </div>

        {isCorrect ? (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.8rem",
              color: "#10b981",
              fontWeight: 600,
            }}
          >
            <CheckCircle2 size={15} /> Verified
          </span>
        ) : (
          <span
            style={{
              fontSize: "0.75rem",
              color: isDark ? "#94a3b8" : "#64748b",
            }}
          >
            Solve the math value
          </span>
        )}
      </div>

      {/* Interactive Challenge & Input Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {/* Math Question Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 14px",
            borderRadius: "8px",
            background: isDark ? "rgba(229, 57, 53, 0.15)" : "#fee2e2",
            border: isDark ? "1px solid rgba(229, 57, 53, 0.3)" : "1px solid #fecaca",
            color: isDark ? "#ff8a80" : "#b91c1c",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "1px",
            userSelect: "none",
          }}
        >
          <span>
            {numA} + {numB} = ?
          </span>
          <button
            type="button"
            onClick={generateCaptcha}
            title="Get another question"
            aria-label="Refresh Captcha"
            style={{
              background: "transparent",
              border: "none",
              color: "inherit",
              cursor: "pointer",
              padding: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              transition: "transform 0.3s ease",
              transform: isRotating ? "rotate(180deg)" : "none",
            }}
          >
            <RotateCw size={14} />
          </button>
        </div>

        {/* Answer Input */}
        <div style={{ flex: 1, minWidth: "140px", display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            id={inputId}
            type="number"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Enter value"
            required
            autoComplete="off"
            style={{
              width: "100%",
              padding: "10px 14px",
              fontSize: "0.95rem",
              borderRadius: "8px",
              border: isCorrect
                ? "2px solid #10b981"
                : isDark
                ? "1px solid rgba(255, 255, 255, 0.18)"
                : "1px solid #cbd5e1",
              background: isDark ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
              color: isDark ? "#ffffff" : "#0f172a",
              outline: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
              boxShadow: isCorrect ? "0 0 0 3px rgba(16, 185, 129, 0.15)" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
