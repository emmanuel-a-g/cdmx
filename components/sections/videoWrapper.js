import styles from "./videoWrapper.module.css";

function VideoWrapper() {
  return (
    <div className={styles.videoWrapper}>
      <div className={styles.videoContent}>
        <a
          href="https://youtube.com/@gareba.saulgarcia?si=4HR2bQHs4hwCqvDv"
          target="_blank"
        >
          Siguenos en nuestro canal
        </a>
      </div>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/6EUFXydn0f4?si=zzU_VByAVQl9IQSv"
          title="Gareba Taller"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoWrapper;
