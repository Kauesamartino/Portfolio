
import DarkModeButton from "./DarkModeButton";
import Menu from "./Menu";
import styles from "./header.module.scss";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menuWrapper}>
          <Menu />
        </div>
      </div>
      <div className={styles.container}>
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header; 