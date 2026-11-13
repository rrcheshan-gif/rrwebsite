"use client";

import React from "react";
import CaptchaValue from "./CaptchaValue";

export default function FakeRecaptcha({
  onChange,
  theme = "light",
}: {
  onChange: (verified: boolean) => void;
  theme?: "light" | "dark";
}) {
  return <CaptchaValue onVerify={(v) => onChange(v)} theme={theme} />;
}
