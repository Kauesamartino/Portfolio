import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Menu />
      </div>
      <div className={styles.container}>
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header; 