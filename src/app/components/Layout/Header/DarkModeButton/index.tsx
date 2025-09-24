'use client';

import { useEffect, useState } from "react";
import styles from "./darkmodebutton.module.scss";

const DarkModeButton = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      className={styles.switch}
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => setDark((prev) => !prev)}
    >
      <span className={styles.track}>
        <span className={dark ? styles.thumbDark : styles.thumbLight}></span>
      </span>
    </button>
  );
};

export default DarkModeButton;