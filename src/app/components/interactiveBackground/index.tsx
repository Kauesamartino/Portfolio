"use client";
import { useRef } from "react";
import { useInteractiveBackground } from "../../../hooks/useInteractiveBackground";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null) as React.RefObject<HTMLCanvasElement>;
  useInteractiveBackground(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className="bgCanvas"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}