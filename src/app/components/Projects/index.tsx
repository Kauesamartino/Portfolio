import style from './projects.module.scss';

export const Projects = () => {

    return (
        <section className={style.section}>
            <div className={style.flex}>
                <h1 className={style.title}>My Projects</h1>
                <div className={style.containerImage} style={{ backgroundImage: "url(/safe-flood.vercel.app_.png)" }}>
                    <div className={style.overlay}>SafeFlood</div>
                </div>
                <div className={style.container}>
                    <h2 className={style.title}>Projects</h2>
                    <p className={style.description}>Details about projects will go here.</p>
                </div>
            </div>
        </section>
    );
}