"use client";

import React from "react";
import GoogleRecaptcha from "./GoogleRecaptcha";

export default function FakeRecaptcha({
  onChange,
  theme = "light",
}: {
  onChange: (verified: boolean) => void;
  theme?: "light" | "dark";
}) {
  return <GoogleRecaptcha onVerify={(v) => onChange(v)} theme={theme} />;
}
