"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "../app/hero-ocean.module.css";

interface HeroOceanProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  videoSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function HeroOcean({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  ctaLabel = "EXPLORAR",
  ctaHref = "#about",
}: HeroOceanProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  const words = title.split(" ");

  return (
    <div className={s.frame}>
      <section className={s.hero}>
        {/* ── Top navigation bar (decorative, real nav is in Navbar) ── */}
        <div className={s.top}>
          <div className={s.brand}>
            <div className={s.mark} />
            <span className={s.word}>Cavalos-Marinhos</span>
          </div>
          <nav className={s.nav}>
            <a href="/educacao">Educação</a>
            <a href="/contato">Contato</a>
          </nav>
        </div>

        {/* ── Giant title ── */}
        <div className={s.title}>
          <h1>
            {words.map((word, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  marginRight: "0.12em",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    transform: entered ? "translateY(0)" : "translateY(110%)",
                    transition: `transform 1.1s cubic-bezier(0.23, 1, 0.32, 1) ${0.15 + i * 0.12}s`,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>
          {subtitle && (
            <p
              style={{
                opacity: entered ? 1 : 0,
                transform: entered ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s, transform 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.6s",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* ── Featured media card bleeding from bottom ── */}
        <div className={s.media}>
          <div className={s.card}>
            <div className={s.photo}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                style={{ objectFit: "cover", objectPosition: "40% 55%" }}
                priority
              />
            </div>
            <div className={s.shade} />

            {/* ── Wave + CTA at bottom of card ── */}
            <div className={s.wave}>
              <svg
                className={s.waveSvg}
                viewBox="0 0 1440 96"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,64 C240,24 480,88 720,52 C960,16 1200,72 1440,40 L1440,96 L0,96 Z"
                  fill="#eff3f3"
                />
              </svg>
              <a
                href={ctaHref}
                className={s.dive}
                style={{
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(10px)",
                  transition:
                    "opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1) 1s, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1) 1s",
                }}
              >
                {ctaLabel} ↓
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
