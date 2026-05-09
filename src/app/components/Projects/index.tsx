import Link from 'next/link';
import style from './projects.module.scss';
import { projects } from '@/data/projects';
import type { Locale } from '@/i18n/config';

type ProjectsProps = {
    locale: Locale;
    title: string;
};

export const Projects = ({ locale, title }: ProjectsProps) => {
    return (
        <section id="projects" className={style.section}>
            <h1 className={style.title}>{title}</h1>
            <div className={style.flex}>
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        className={
                            idx % 2 === 1
                                ? `${style.project} ${style.reverse}`
                                : style.project
                        }
                    >
                        <Link
                            href={`/${locale}/project/${project.id}`}
                            className={style.containerImage}
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <div className={style.overlay}>{project.name}</div>
                        </Link>
                        <div className={style.container}>
                            <h2 className={style.title}>{project.name}</h2>
                            <p className={style.description}>{project.description[locale]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
