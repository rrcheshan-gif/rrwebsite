"use client";

import React from "react";
import GoogleRecaptcha from "./GoogleRecaptcha";

interface CaptchaValueProps {
  onVerify?: (isValid: boolean, data?: { answer: string; expected: number; a: number; b: number }) => void;
  theme?: "light" | "dark";
  resetTrigger?: number;
}

export default function CaptchaValue({
  onVerify,
  theme = "light",
  resetTrigger = 0,
}: CaptchaValueProps) {
  const handleVerify = (verified: boolean, token?: string) => {
    if (onVerify) {
      onVerify(verified, verified ? { answer: "10", expected: 10, a: 5, b: 5 } : undefined);
    }
  };

  return (
    <GoogleRecaptcha
      onVerify={handleVerify}
      theme={theme}
      resetTrigger={resetTrigger}
    />
  );
}
