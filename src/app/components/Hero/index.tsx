'use client';

import React, { useRef } from "react";
import style from "./hero.module.scss";
import { useInteractiveBackground } from "../../../hooks/useInteractiveBackground";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null) as React.RefObject<HTMLCanvasElement>;
  useInteractiveBackground(canvasRef);

  return (
    <section className={style.section}>
      <canvas ref={canvasRef} className={style.bgCanvas} />
      <div className={style.personalInfo}>
        <p>Hello.</p>
        <h1>I'm Kauê Samartino.</h1>
        <p>Software Developer</p>
      </div>
    </section>
  );
};