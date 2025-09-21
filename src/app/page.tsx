
import InteractiveBackground from "./components/interactiveBackground";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import style from './page.module.scss'

export default function Page() {
    return(
        <>
            <InteractiveBackground />
            <main className={style.main}>
                <Hero />
                <Skills />
                <About />
                <Projects />
            </main>
        </>
    );
}