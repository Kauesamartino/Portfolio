import Image from 'next/image';
import style from './projects.module.scss';

export const Projects = () => {

    return (
        <section className={style.section}>
            <h1 className={style.title}>My Projects</h1>
            <div className={style.containerImage}>
                <Image 
                    src="/images/coming-soon.png"
                    alt="Coming Soon"
                    width={300}
                    height={300}
                />
            </div>
            <div className={style.container}>
                <h2 className={style.title}>Projects</h2>
                <p className={style.description}>Details about projects will go here.</p>
            </div>
        </section>
    );
}