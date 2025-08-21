import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.title}>Alter Ego</h3>
        <p className={styles.subtile}>
          Una guia para encontrar tu verdadero yo
        </p>
      </div>
    </footer>
  );
};

export default Footer
