import styles from "./Course.module.css";
import { TrendingUp, DollarSign, Users } from "lucide-react";

const Course = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Curso de Atencion Primaria a Clientes
          </h2>
          <div className={styles.description}>
            <p>
              El reducido grupo de marcas de alto nivel que tienen éxito
              inexplicable lo hacen porque{" "}
              <span className={styles.highlightText}>venden emociones</span>.
              Este curso ahorra tiempo y gastos en capacitación. Es fácil de
              aplicar y utiliza principios básicos de la psicología humana para
              crear conexiones auténticas con los clientes.
            </p>
          </div>
        </div>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.iconContainer}>
              <TrendingUp className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Mayor Satisfacción</h3>
            <p className={styles.cardDescription}>
              Aumenta la satisfacción del cliente sin hacer gastos adicionales.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.iconContainer}>
              <DollarSign className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Recursos Existentes</h3>
            <p className={styles.cardDescription}>
              Usa lo que ya tienes para atraer y retener clientes.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <div className={styles.iconContainer}>
              <Users className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Conexiones Humanas</h3>
            <p className={styles.cardDescription}>
              Ayuda a los empleados a crear conexiones humanas cálidas.
            </p>
          </div>
        </div>
        <div className={styles.inspirationalSection}>
            <div className={styles.inspirationalCard}>
                <p>
                    Las personas necesitan sentirse valoradas: 
                    <span className={styles.highlightText}> eso hace extraordinaria las experiencia del cliente</span>
                </p>
                <p>
                    Este principio es usado por grandes marcas.
                    <span className={styles.highlightText}>¡Tú también puedes!</span>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
