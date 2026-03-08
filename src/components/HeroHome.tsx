"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./HeroHome.module.css";

interface HeroHomeProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundSrc?: string;
  hasBanner?: boolean;
}

export default function HeroHome({
  title,
  description,
  imageSrc,
  imageAlt,
  backgroundSrc,
  hasBanner = false,
}: HeroHomeProps) {
  const [isTriggered, setIsTriggered] = useState(false);
  const [overlayHidden, setOverlayHidden] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const setVh = () => {
      el.style.setProperty("--viewport-height", `${window.innerHeight}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTriggered(true);
        if (timeoutId) window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => setOverlayHidden(true), 400);
      } else {
        setIsTriggered(false);
        setOverlayHidden(false);
        if (timeoutId) window.clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.heroHome} ${isTriggered ? styles.isTriggered : ""} ${
        overlayHidden ? styles.overlayHidden : ""
      } ${hasBanner ? styles.hasBanner : ""}`}
    >
      {backgroundSrc && (
        <div className={styles.heroHomeBg}>
          <Image src={backgroundSrc} alt="" fill priority style={{ objectFit: "cover" }} />
        </div>
      )}

      <div className={styles.heroHomeOverlay}>
        <svg className={`${styles.corner} ${styles.topLeft}`} width="36" height="36" viewBox="0 0 36 36">
          <path d="M0 0C0 19.8823 16.1177 36 36 36V0H0Z" fill="currentColor" />
        </svg>
        <svg className={`${styles.corner} ${styles.topRight}`} width="36" height="36" viewBox="0 0 36 36">
          <path d="M0 0C0 19.8823 16.1177 36 36 36V0H0Z" fill="currentColor" />
        </svg>
        <svg className={`${styles.corner} ${styles.bottomLeft}`} width="36" height="36" viewBox="0 0 36 36">
          <path d="M0 0C0 19.8823 16.1177 36 36 36V0H0Z" fill="currentColor" />
        </svg>
        <svg className={`${styles.corner} ${styles.bottomRight}`} width="36" height="36" viewBox="0 0 36 36">
          <path d="M0 0C0 19.8823 16.1177 36 36 36V0H0Z" fill="currentColor" />
        </svg>
      </div>

      <div className={styles.heroHomeWrapper}>
        <h1 className="anim--split">{title}</h1>
        <p className="anim--fade">{description}</p>

        {imageSrc && (
          <div className={styles.heroHomeImage}>
            <Image src={imageSrc} alt={imageAlt ?? ""} width={1550} height={872} priority className="anim--fade" />
          </div>
        )}
      </div>
    </section>
  );
}
