import projects from '@/data/projects.json';
import { Button } from '@/app/components/Button';
import style from './project.module.scss';
import Link from 'next/link';
import InteractiveBackground from '@/app/components/interactiveBackground';


export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects.find(p => String(p.id) === params.id);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <>
            <InteractiveBackground />
            <main className={style.main}>
                <h1>{project.name}</h1>
                <div className={style.flex}>
                    <div className={style.container}>
                        <div
                            className={style.containerImage}
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <div className={style.overlay}>{project.name}</div>
                        </div>
                    </div>
                    <div className={style.containerText}>
                        <p className={style.description}>{project.description}</p>
                        <h3>Technologies:</h3>
                        <ul>
                            {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
                        </ul>
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                            <Button className={style.button}>
                                Visit project
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </>

    );
}