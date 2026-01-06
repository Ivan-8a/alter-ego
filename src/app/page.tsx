import styles from "./page.module.css";
import Navbar from "@/components/layout/Navbar";
import Course from "@/components/sections/Course";
import Hero from "@/components/sections/Hero";
import Video from "@/components/sections/Video";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

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
        <Course/>
        <Video/>
        <CallToAction/>
      </main>
      <Footer/>
    </>
  );
}
