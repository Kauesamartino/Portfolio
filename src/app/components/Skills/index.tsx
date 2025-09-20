import styles from './style.module.scss';

export const Skills = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.item}>Java</li>
        <li className={styles.item}>React</li>
        <li className={styles.item}>AWS</li>
        <li className={styles.item}>Typescript</li>
        <li className={styles.item}>.NET</li>
        <li className={styles.item}>Golang</li>
      </ul>
    </section>
  );
};