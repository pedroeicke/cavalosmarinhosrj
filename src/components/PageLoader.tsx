"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");

  useEffect(() => {
    // Exit after a short branded loading phase
    const t1 = setTimeout(() => setPhase("exit"), 800);
    const t2 = setTimeout(() => setPhase("done"), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="page-loader"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0c1637",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        opacity: phase === "exit" ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        pointerEvents: phase === "exit" ? "none" : "auto",
      }}
    >
      {/* Animated wave loader */}
      <div className="loader-waves">
        <svg width="80" height="60" viewBox="0 0 80 60">
          <path
            d="M0,30 Q10,10 20,30 T40,30 T60,30 T80,30"
            fill="none"
            stroke="rgba(26,169,232,0.6)"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              dur="1.5s"
              repeatCount="indefinite"
              values="
                M0,30 Q10,10 20,30 T40,30 T60,30 T80,30;
                M0,30 Q10,50 20,30 T40,30 T60,30 T80,30;
                M0,30 Q10,10 20,30 T40,30 T60,30 T80,30
              "
            />
          </path>
          <path
            d="M0,35 Q10,15 20,35 T40,35 T60,35 T80,35"
            fill="none"
            stroke="rgba(59,128,112,0.4)"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              dur="2s"
              repeatCount="indefinite"
              values="
                M0,35 Q10,55 20,35 T40,35 T60,35 T80,35;
                M0,35 Q10,15 20,35 T40,35 T60,35 T80,35;
                M0,35 Q10,55 20,35 T40,35 T60,35 T80,35
              "
            />
          </path>
        </svg>
      </div>
      <p
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginTop: 16,
        }}
      >
        Cavalos-Marinhos
      </p>
    </div>
  );
}
