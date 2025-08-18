import styles from "./page.module.css";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className={styles.main}>
        <Hero 
        title="alter ego"
        subtitle="Una guía para encontrar tu yo verdadero"
        description="Todo lo que buscas está dentro de ti. Ahí está tu otro yo, completo y feliz, esperando experimentar su existencia. Te guiamos para hacerlo brillar."
        ctaText="Descubre más"
        ctaHref="#curso"
        // imageSrc="/path/to/your/image.jpg" // Opcional: agrega tu imagen
        // imageAlt="Descripción de tu imagen"
      />
      </main>
    </>
  );
}
