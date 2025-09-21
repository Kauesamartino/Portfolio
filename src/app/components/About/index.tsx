import styles from './about.module.scss';

export const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>About Me</h2>
                <p className={styles.description}>
                    I am a fullstack software engineer with solid experience in application and web development. My goal is to become a solutions architect, always seeking to improve my knowledge in system architecture and best development practices. I am also a cybersecurity enthusiast, constantly following trends and studying ways to build more secure and resilient applications.
                </p>
            </div>
        </section>
    );
}
