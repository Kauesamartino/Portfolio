import projectsData from "./projects.json";
import type { Locale } from "@/i18n/config";

export type Project = {
  id: number;
  name: string;
  description: Record<Locale, string>;
  image: string;
  url: string;
  width: number;
  height: number;
  technologies: string[];
};

export const projects: Project[] = projectsData;
