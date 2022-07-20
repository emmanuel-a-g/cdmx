import styles from "./smallBtnSlider.module.css";

function SmallBtnSlider({ side, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        side === "right"
          ? `${styles.btnSlide} ${styles.next}`
          : `${styles.btnSlide} ${styles.prev}`
      }
    >
      <img
        className={styles.smallButton}
        src={side === "right" ? "./right.png" : "./left.png"}
        alt={side === "right" ? "right image" : "left image"}
      />
    </button>
  );
}

export default SmallBtnSlider;
