import { en } from "./en";
import { pt } from "./pt";
import type { Locale } from "@/i18n/config";

export type Dictionary = {
  nav: {
    home: string;
    skills: string;
    about: string;
    projects: string;
    openMenu: string;
    closeMenu: string;
  };
  languageSwitcher: {
    label: string;
    nextLocale: string;
  };
  hero: {
    greeting: string;
    title: string;
    role: string;
  };
  skills: {
    items: readonly string[];
  };
  about: {
    title: string;
    description: string;
    imageAlt: string;
    links: {
      linkedin: string;
      github: string;
    };
  };
  projects: {
    title: string;
    technologies: string;
    visitProject: string;
    notFound: string;
  };
};

export const dictionaries = {
  pt,
  en,
} satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
