import styles from './Hero.module.css';

interface HeroProps {
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  ctaHref = "#curso",
  imageSrc,
  imageAlt = "Tu foto aquí"
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Contenido principal */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            alter ego
          </h1>
          <p className={styles.subtitle}>
            Una guía para encontrar tu yo verdadero
          </p>
          <div className={styles.descriptionCard}>
            <p className={styles.description}>
              Todo lo que buscas está dentro de ti. Ahí está tu otro yo, completo y feliz, esperando experimentar su existencia. 
              <span className={styles.highlight}> Te guiamos para hacerlo brillar.</span>
            </p>
          </div>
          <a href={ctaHref} className={styles.cta}>
            Descubre mas
          </a>
        </div>

        {/* Espacio para foto */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className={styles.image}
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderIcon}>
                  <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className={styles.imagePlaceholder}>Tu foto aquí</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}