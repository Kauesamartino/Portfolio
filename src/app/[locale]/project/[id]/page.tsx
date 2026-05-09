import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/app/components/Button";
import InteractiveBackground from "@/app/components/interactiveBackground";
import style from "@/app/project/[id]/project.module.scss";
import { projects } from "@/data/projects";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/messages";

type LocaleProjectPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function Page({ params }: LocaleProjectPageProps) {
  const { locale, id } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const project = projects.find((entry) => entry.id === Number(id));

  if (!project) {
    return <div>{dictionary.projects.notFound}</div>;
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
            <p className={style.description}>{project.description[locale]}</p>
            <h3>{dictionary.projects.technologies}</h3>
            <ul>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <Button className={style.button}>{dictionary.projects.visitProject}</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
