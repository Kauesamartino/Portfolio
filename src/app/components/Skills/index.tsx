import styles from './skills.module.scss';

export const Skills = () => {
  const skills = [
    { key: 'java', label: 'Java' },
    { key: 'react', label: 'React' },
    { key: 'aws', label: 'AWS' },
    { key: 'typescript', label: 'Typescript' },
    { key: 'dotnet', label: '.NET' },
    { key: 'golang', label: 'Golang' },
  ];
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {skills.map(skill => (
          <li className={styles.item} key={skill.key}>{skill.label}</li>
        ))}
      </ul>
    </section>
  );
};