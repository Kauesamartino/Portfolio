import Link from 'next/link';
import style from './projects.module.scss';

export const Projects = () => {

    return (
        <section className={style.section}>
            <h1 className={style.title}>My Projects</h1>
            <div className={style.flex}>
                <Link href="https://safe-flood.vercel.app/" target="_blank" rel="noopener noreferrer" className={style.containerImage} style={{ backgroundImage: "url(/safe-flood.vercel.app_.png)" }}>
                    <div className={style.overlay}>
                        SafeFlood
                    </div>
                </Link>
                <div className={style.container}>
                    <h2 className={style.title}>SafeFlood</h2>
                    <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis neque molestias veritatis, aperiam minima ab in culpa corporis sapiente tempore incidunt ipsum adipisci minus provident id distinctio ex. Quae.</p>
                </div>
            </div>
        </section>
    );
}