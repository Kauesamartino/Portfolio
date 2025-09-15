'use client';

import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <a href="/" className={styles.menu__item}>
        Home
      </a>
      <a href="/about" className={styles.menu__item}>
        About
      </a>
      <a href="/projects" className={styles.menu__item}>
        Projects
      </a>
      <a href="/contact" className={styles.menu__item}>
        Contact
      </a>
    </nav>
  );
};

export default Menu;