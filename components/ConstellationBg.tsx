"use client";

import { useEffect, useRef } from "react";

export default function ConstellationBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0;
    const nodes: any[] = [];
    const mouse = { x: -999, y: -999 };
    const GOLD = "#C9A84C";
    const N = 70,
      CONNECT_DIST = 150,
      MOUSE_DIST = 180;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const mkNode = () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.4,
      pulse: Math.random() * Math.PI * 2,
    });

    resize();
    for (let i = 0; i < N; i++) nodes.push(mkNode());

    const handleResize = () => resize();
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const dist = (a: any, b: any) => Math.hypot(a.x - b.x, a.y - b.y);

    const frame = () => {
      ctx.clearRect(0, 0, W, H);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.018;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        const md = dist(n, mouse);
        if (md < MOUSE_DIST) {
          const f = (1 - md / MOUSE_DIST) * 0.6;
          n.vx += ((n.x - mouse.x) / md) * f * 0.08;
          n.vy += ((n.y - mouse.y) / md) * f * 0.08;
        }

        const speed = Math.hypot(n.vx, n.vy);
        const max = 0.9;
        if (speed > max) {
          n.vx = (n.vx / speed) * max;
          n.vy = (n.vy / speed) * max;
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = dist(nodes[i], nodes[j]);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(201,168,76,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const glow = 0.5 + Math.sin(n.pulse) * 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (1 + glow * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${0.35 + glow * 0.45})`;
        ctx.fill();
      });

      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}
