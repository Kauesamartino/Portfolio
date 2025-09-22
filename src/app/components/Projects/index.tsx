import Link from 'next/link';
import style from './projects.module.scss';
import projects from '@/data/projects.json';

export const Projects = () => {
    return (
        <section className={style.section}>
            <h1 className={style.title}>My Projects</h1>
            <div className={style.flex}>
                {projects.map((project, idx) => (
                    <div key={project.id} className={style.project}>
                        {idx % 2 === 0 ? (
                            <>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={style.containerImage}
                                    style={{ backgroundImage: `url(${project.image})` }}
                                >
                                    <div className={style.overlay}>{project.name}</div>
                                </Link>
                                <div className={style.container}>
                                    <h2 className={style.title}>{project.name}</h2>
                                    <p className={style.description}>{project.description}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={style.container}>
                                    <h2 className={style.title}>{project.name}</h2>
                                    <p className={style.description}>{project.description}</p>
                                </div>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={style.containerImage}
                                    style={{ backgroundImage: `url(${project.image})` }}
                                >
                                    <div className={style.overlay}>{project.name}</div>
                                </Link>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}