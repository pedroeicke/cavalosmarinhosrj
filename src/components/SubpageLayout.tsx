"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface SubpageLayoutProps {
  children: React.ReactNode;
  heroTitle: string;
  heroLead?: string;
  heroImage?: string;
  depth?: "shallow" | "mid" | "deep" | "abyss";
}

export default function SubpageLayout({
  children,
  heroTitle,
  heroLead,
  heroImage,
}: SubpageLayoutProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    const t = setTimeout(() => setEntered(true), 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseFloat(el.dataset.delay || "0");
            if (delay > 0) {
              setTimeout(() => el.classList.add("visible"), delay * 1000);
            } else {
              el.classList.add("visible");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".page-animate").forEach((el) => observer.observe(el));
    document.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  const words = heroTitle.split(" ");

  return (
    <>
      <Navbar />

      {/* ═══ Ocean School subpage hero — full-bleed image bg, white text, wave divider ═══ */}
      <section className="subhero-os">
        {/* Background image */}
        {heroImage && (
          <div className="subhero-os__bg">
            <Image
              src={heroImage}
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
              priority
            />
          </div>
        )}
        <div className="subhero-os__overlay" />

        {/* Content */}
        <div className="subhero-os__content">
          {/* Back link inside the banner */}
          <Link
            href="/"
            className="subhero-os__back"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateY(0)" : "translateY(-10px)",
              transition: "opacity .6s cubic-bezier(0.23, 1, 0.32, 1) 0.3s, transform .6s cubic-bezier(0.23, 1, 0.32, 1) 0.3s",
            }}
          >
            ← Voltar ao início
          </Link>
          <h1 className="subhero-os__title">
            {words.map((word, i) => (
              <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.15em" }}>
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
          {heroLead && (
            <p
              className="subhero-os__lead"
              style={{
                opacity: entered ? 1 : 0,
                transform: entered ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.5s, transform 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.5s",
              }}
              dangerouslySetInnerHTML={{ __html: heroLead }}
            />
          )}
        </div>

        {/* Wave divider at bottom */}
        <div className="subhero-os__wave">
          <svg viewBox="0 0 1440 96" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64 C360,24 720,88 1080,48 C1260,28 1380,56 1440,40 L1440,96 L0,96 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ═══ Page body ═══ */}
      <div className="page-body">
        {children}
      </div>

      {/* ═══ Footer ═══ */}
      <Footer />
    </>
  );
}
