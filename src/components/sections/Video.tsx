import styles from "./Video.module.css";

const Video = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Video Introductorio</h2>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            controls
            poster="/posterintroductorio.png"
          >
            <source src="/videointroductorio.mp4" type="video/mp4" />
            <source src="/videos/intro-video.webm" type="video/webm" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
