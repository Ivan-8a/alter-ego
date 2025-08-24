import styles from './CallToAction.module.css'

const CallToAction = () => {
    return(
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        ¿Listo para transformar tu negocio?
                    </h2>
                    <p className={styles.subtitle}>
                        Descubre como conectar autenticamente con tus clientes
                    </p>
                    <a href="#contacto" className={styles.ctaButton}>
                        Comienza ahora
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CallToAction