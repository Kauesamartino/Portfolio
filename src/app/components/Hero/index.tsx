import style from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.section}>
      <div className={style.personalInfo}>
        <p>Hello.</p>
        <h1>I'm Kauê Samartino.</h1>
        <p>Software Developer</p>
      </div>
    </section>
  );
};