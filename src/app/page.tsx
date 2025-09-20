import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import style from './page.module.scss'

export default function Home() {
    return(
        <main className={style.main}>
            <Hero />
            <Skills />
        </main>
    )
}