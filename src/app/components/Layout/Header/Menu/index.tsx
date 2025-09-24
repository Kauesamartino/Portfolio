'use client';


import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./menu.module.scss";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Menu: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleToggle = () => {
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 350);
    } else {
      setOpen(true);
      setClosing(false);
    }
  };

  if (isDesktop) {
    return (
      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className={styles.item}>
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  // Mobile: menu hamburguer
  return (
    <div className={styles.hamburgerWrapper}>
      <button
        className={open && !closing ? `${styles.hamburger} ${styles.open}` : styles.hamburger}
        aria-label={open && !closing ? "Fechar menu" : "Abrir menu"}
        onClick={handleToggle}
      >
        <span className={styles.bar + " " + styles.bar1}></span>
        <span className={styles.bar + " " + styles.bar2}></span>
        <span className={styles.bar + " " + styles.bar3}></span>
      </button>
      {(open || closing) && (
        <nav className={
          closing
            ? `${styles.menuMobile} ${styles.slideOut}`
            : styles.menuMobile
        }>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={handleToggle}>
                  <p>
                    {item.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;