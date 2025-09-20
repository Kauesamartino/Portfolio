'use client';

import Link from "next/link";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link href="/" className={styles.item}>
        Home
      </Link>
      <Link href="/about" className={styles.item}>
        About
      </Link>
      <Link href="/projects" className={styles.item}>
        Projects
      </Link>
      <Link href="/contact" className={styles.item}>
        Contact
      </Link>
    </nav>
  );
};

export default Menu;