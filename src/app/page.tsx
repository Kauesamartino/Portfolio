import { Hero } from "./components/Hero";
import style from './page.module.scss'

export default function Home() {
    return(
        <main className={style.main}>
            <Hero />
        </main>
    )
}