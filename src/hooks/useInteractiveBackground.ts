import { useRef, useEffect } from "react";

const POINTS = 40;
const LINE_DISTANCE = 120;

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

function distance(a: any, b: any) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

export function useInteractiveBackground(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const points = useRef<any[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    points.current = Array.from({ length: POINTS }, () => ({
      x: randomBetween(0, canvas.width),
      y: randomBetween(0, canvas.height),
      vx: randomBetween(-0.3, 0.3),
      vy: randomBetween(-0.3, 0.3),
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of points.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      for (let i = 0; i < points.current.length; i++) {
        for (let j = i + 1; j < points.current.length; j++) {
          const a = points.current[i];
          const b = points.current[j];
          const d = distance(a, b);
          if (d < LINE_DISTANCE) {
            ctx.strokeStyle = `rgba(100,100,100,${1 - d / LINE_DISTANCE})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let p of points.current) {
        const d = distance(p, mouse.current);
        if (d < LINE_DISTANCE) {
          ctx.strokeStyle = `rgba(0,150,255,${1 - d / LINE_DISTANCE})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }
      }

      for (let p of points.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#222";
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    }
    animate();

    function onMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [canvasRef]);
}