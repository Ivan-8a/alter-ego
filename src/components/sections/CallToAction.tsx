import styles from './CallToAction.module.css'
import BuyButton from './BuyButton'

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
                    <BuyButton className={styles.ctaButton}>
                        Comienza Ahora
                    </BuyButton>
                </div>
            </div>
        </section>
    )
}

export default CallToAction