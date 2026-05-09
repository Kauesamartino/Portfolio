import { notFound } from "next/navigation";
import InteractiveBackground from "@/app/components/interactiveBackground";
import { Hero } from "@/app/components/Hero";
import { Skills } from "@/app/components/Skills";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import style from "@/app/page.module.scss";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/messages";

type LocaleHomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: LocaleHomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <>
      <InteractiveBackground />
      <main className={style.main}>
        <Hero
          greeting={dictionary.hero.greeting}
          title={dictionary.hero.title}
          role={dictionary.hero.role}
        />
        <Skills items={dictionary.skills.items} />
        <About
          title={dictionary.about.title}
          description={dictionary.about.description}
          imageAlt={dictionary.about.imageAlt}
          links={dictionary.about.links}
        />
        <Projects locale={locale} title={dictionary.projects.title} />
      </main>
    </>
  );
}
