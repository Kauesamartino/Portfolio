'use client';

import Menu from "../Menu";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Menu />
      </div>
    </header>
  );
};

export default Header; 