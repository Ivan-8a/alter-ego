import styles from "./page.module.css";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <main className={styles.main}>
        <h1>
          Mipagina
        </h1>
      </main>
    </div>
  );
}
