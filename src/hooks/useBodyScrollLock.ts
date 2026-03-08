"use client";

import { useEffect } from "react";

let lockCount = 0;
let previousOverflow: string | null = null;

function lockBodyScroll() {
  if (typeof document === "undefined") return;

  lockCount += 1;
  if (lockCount !== 1) return;

  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
}

function unlockBodyScroll() {
  if (typeof document === "undefined") return;

  lockCount = Math.max(0, lockCount - 1);
  if (lockCount !== 0) return;

  document.body.style.overflow = previousOverflow ?? "";
  previousOverflow = null;
}

export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    lockBodyScroll();
    return () => unlockBodyScroll();
  }, [active]);
}
