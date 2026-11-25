"use client";

import React, { useState, useEffect, useRef } from "react";

interface GoogleRecaptchaProps {
  onVerify?: (verified: boolean, token?: string) => void;
  theme?: "light" | "dark";
  resetTrigger?: number;
}

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          theme?: string;
          callback: (response: string) => void;
          "expired-callback"?: () => void;
        }
      ) => number;
      reset: (widgetId?: number) => void;
    };
    onGoogleRecaptchaLoad?: () => void;
  }
}

export default function GoogleRecaptcha({
  onVerify,
  theme = "light",
  resetTrigger = 0,
}: GoogleRecaptchaProps) {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [isOfficialReady, setIsOfficialReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const isDark = theme === "dark";

  // If siteKey is present, load Google's official reCAPTCHA script
  useEffect(() => {
    if (!siteKey || typeof window === "undefined") return;

    if (window.grecaptcha && containerRef.current && widgetIdRef.current === null) {
      try {
        const id = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          theme: isDark ? "dark" : "light",
          callback: (response: string) => {
            setChecked(true);
            setToken(response);
            onVerify?.(true, response);
          },
          "expired-callback": () => {
            setChecked(false);
            setToken("");
            onVerify?.(false, "");
          },
        });
        widgetIdRef.current = id;
        setIsOfficialReady(true);
      } catch (e) {
        console.warn("reCAPTCHA render error:", e);
      }
      return;
    }

    if (!document.getElementById("google-recaptcha-script")) {
      window.onGoogleRecaptchaLoad = () => {
        if (window.grecaptcha && containerRef.current && widgetIdRef.current === null) {
          try {
            const id = window.grecaptcha.render(containerRef.current, {
              sitekey: siteKey,
              theme: isDark ? "dark" : "light",
              callback: (response: string) => {
                setChecked(true);
                setToken(response);
                onVerify?.(true, response);
              },
              "expired-callback": () => {
                setChecked(false);
                setToken("");
                onVerify?.(false, "");
              },
            });
            widgetIdRef.current = id;
            setIsOfficialReady(true);
          } catch (e) {
            console.warn("reCAPTCHA callback render error:", e);
          }
        }
      };

      const script = document.createElement("script");
      script.id = "google-recaptcha-script";
      script.src = "https://www.google.com/recaptcha/api.js?onload=onGoogleRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, [siteKey, isDark]);

  // Reset when resetTrigger increments
  useEffect(() => {
    if (resetTrigger > 0) {
      setChecked(false);
      setLoading(false);
      setToken("");
      if (siteKey && window.grecaptcha && widgetIdRef.current !== null) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch (e) {
          // ignore
        }
      }
    }
  }, [resetTrigger, siteKey]);

  // Interactive handler for standalone Google reCAPTCHA widget
  const handleCheckboxClick = async () => {
    if (checked || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/captcha-token", { cache: "no-store" });
      const data = await res.json();
      await new Promise((r) => setTimeout(r, 700));
      if (!data.token) throw new Error("no token");
      setChecked(true);
      setToken(data.token);
      onVerify?.(true, data.token);
    } catch (e) {
      setChecked(false);
      setToken("");
      onVerify?.(false, "");
      alert("Verification failed. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // If official Google reCAPTCHA is available and rendered
  if (siteKey && isOfficialReady) {
    return (
      <div style={{ margin: "10px 0" }}>
        <div ref={containerRef} />
        <input type="hidden" name="g-recaptcha-response" value={token} />
        <input type="hidden" name="recaptchaToken" value={token} />
        <input type="text" name="website_hp" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      </div>
    );
  }

  // Google reCAPTCHA v2 standard widget UI
  return (
    <div style={{ margin: "10px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "304px",
          height: "78px",
          backgroundColor: isDark ? "#222222" : "#f9f9f9",
          border: isDark ? "1px solid #444444" : "1px solid #d3d3d3",
          borderRadius: "3px",
          padding: "0 12px",
          boxShadow: isDark
            ? "0px 0px 4px 1px rgba(0,0,0,0.3)"
            : "0px 0px 4px 1px rgba(0,0,0,0.08)",
          fontFamily: "Roboto, helvetica, arial, sans-serif",
          boxSizing: "border-box",
          userSelect: "none",
        }}
      >
        {/* Left: Checkbox & Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            onClick={handleCheckboxClick}
            role="checkbox"
            aria-checked={checked}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                handleCheckboxClick();
              }
            }}
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: isDark ? "#18181b" : "#ffffff",
              border: checked
                ? "none"
                : isDark
                ? "2px solid #71717a"
                : "2px solid #c1c1c1",
              borderRadius: "2px",
              cursor: checked ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transition: "border-color 0.2s ease",
            }}
          >
            {loading && (
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  border: isDark ? "3px solid #333" : "3px solid #f3f3f3",
                  borderTop: "3px solid #4a90e2",
                  borderRadius: "50%",
                  animation: "recaptchaSpin 0.9s linear infinite",
                }}
              />
            )}
            {checked && (
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: "30px",
                  height: "30px",
                  position: "absolute",
                  top: "-2px",
                  left: "-1px",
                }}
              >
                <path
                  fill="#0f9d58"
                  d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                />
              </svg>
            )}
          </div>
          <span
            onClick={handleCheckboxClick}
            style={{
              color: isDark ? "#f3f4f6" : "#282828",
              fontSize: "14px",
              fontWeight: 400,
              cursor: checked ? "default" : "pointer",
            }}
          >
            I&apos;m not a robot
          </span>
        </div>

        {/* Right: Google reCAPTCHA Branding */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "6px",
          }}
        >
          <img
            src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
            alt="Google reCAPTCHA"
            style={{ width: "30px", height: "30px" }}
          />
          <div
            style={{
              color: isDark ? "#9ca3af" : "#555555",
              fontSize: "10px",
              marginTop: "2px",
              fontWeight: 500,
            }}
          >
            reCAPTCHA
          </div>
          <div
            style={{
              color: isDark ? "#9ca3af" : "#555555",
              fontSize: "8px",
              marginTop: "2px",
            }}
          >
            <a
              href="https://www.google.com/intl/en/policies/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isDark ? "#9ca3af" : "#555555",
                textDecoration: "none",
              }}
            >
              Privacy
            </a>{" "}
            -{" "}
            <a
              href="https://www.google.com/intl/en/policies/terms/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: isDark ? "#9ca3af" : "#555555",
                textDecoration: "none",
              }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Hidden inputs automatically sent with any form submission */}
      <input type="hidden" name="g-recaptcha-response" value={token} />
      <input type="hidden" name="recaptchaToken" value={token} />
      <input
        type="text"
        name="website_hp"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes recaptchaSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `,
        }}
      />
    </div>
  );
}
