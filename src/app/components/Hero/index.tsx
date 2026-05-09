import style from "./hero.module.scss";

type HeroProps = {
  greeting: string;
  title: string;
  role: string;
};

export const Hero = ({ greeting, title, role }: HeroProps) => {
  return (
    <section id="home" className={style.section}>
      <div className={style.personalInfo}>
        <p>{greeting}</p>
        <h1>{title}</h1>
        <p>{role}</p>
      </div>
    </section>
  );
};
