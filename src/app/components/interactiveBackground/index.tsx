"use client";
import { useRef } from "react";
import { useInteractiveBackground } from "../../../hooks/useInteractiveBackground";
import style from "./style.module.scss"

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null!) as React.RefObject<HTMLCanvasElement>;
  useInteractiveBackground(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className={style.bgCanvas}
    />
  );
}