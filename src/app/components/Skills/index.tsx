import styles from './skills.module.scss';

type SkillsProps = {
  items: readonly string[];
};

export const Skills = ({ items }: SkillsProps) => {
  return (
    <section id="skills" className={styles.section}>
      <ul className={styles.list}>
        {items.map((skill) => (
          <li className={styles.item} key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};
