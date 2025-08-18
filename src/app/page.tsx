import styles from "./page.module.css";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className={styles.main}>
        <Hero 
        ctaHref="#curso"
        // imageSrc="/path/to/your/image.jpg" // Opcional: agrega tu imagen
        // imageAlt="Descripción de tu imagen"
      />
      </main>
    </>
  );
}
