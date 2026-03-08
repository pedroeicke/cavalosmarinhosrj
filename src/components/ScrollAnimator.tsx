"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    // Mark body as JS-ready so CSS can hide elements for animation
    document.documentElement.classList.add("js-ready");

    // IntersectionObserver for fade-in animations
    const observerCallback: IntersectionObserverCallback = (entries) => {
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
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    document.querySelectorAll(".page-animate").forEach((el) => observer.observe(el));
    document.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));

    return () => { observer.disconnect(); };
  }, []);

  return null;
}
