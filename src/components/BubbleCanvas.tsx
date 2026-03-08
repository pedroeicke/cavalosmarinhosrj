"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
  wobbleOffset: number;
}

export default function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const bubbles: Bubble[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const resetBubble = (b: Bubble) => {
      b.x = Math.random() * canvas.width;
      b.y = canvas.height + Math.random() * 100;
      b.radius = Math.random() * 4 + 1;
      b.speed = Math.random() * 0.8 + 0.2;
      b.opacity = Math.random() * 0.3 + 0.05;
      b.wobble = Math.random() * 2 - 1;
      b.wobbleSpeed = Math.random() * 0.02 + 0.005;
      b.wobbleOffset = Math.random() * Math.PI * 2;
    };

    const count = Math.min(Math.floor(window.innerWidth / 20), 60);
    for (let i = 0; i < count; i++) {
      const b: Bubble = { x: 0, y: 0, radius: 0, speed: 0, opacity: 0, wobble: 0, wobbleSpeed: 0, wobbleOffset: 0 };
      resetBubble(b);
      b.y = Math.random() * canvas.height;
      bubbles.push(b);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const b of bubbles) {
        b.y -= b.speed;
        b.x += Math.sin(Date.now() * b.wobbleSpeed + b.wobbleOffset) * b.wobble * 0.3;
        if (b.y < -20) resetBubble(b);

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${b.opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${b.opacity * 1.5})`;
        ctx.fill();
      }
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animFrame);
      else animate();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} id="bubbleCanvas" />;
}
