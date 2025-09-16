'use client';

import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <a href="/" className={styles.item}>
        Home
      </a>
      <a href="/about" className={styles.item}>
        About
      </a>
      <a href="/projects" className={styles.item}>
        Projects
      </a>
      <a href="/contact" className={styles.item}>
        Contact
      </a>
    </nav>
  );
};

export default Menu;