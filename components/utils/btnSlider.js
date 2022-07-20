import styles from "./btnSlider.module.css";

function BtnSlider({side, moveSlide}) {
  return (
    <button onClick={moveSlide} className={side === "right" ? `${styles.btnSlide} ${styles.next}` : `${styles.btnSlide} ${styles.prev}`}>
      <img src={side === "right" ? "./right.png" : "./left.png"} alt="left arrow" />
    </button>
  );
}

export default BtnSlider;