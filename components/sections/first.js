import styles from "./first.module.css";
function First() {
  return (
    <div className={styles.first}>
      <div className={styles.center}>
        <h1>TALLER DAE</h1>
        <p className={styles.para}>
          En un rinconsito de la Ciudad de Mexico creamos trabajos base de
          madera dignos de crear.
        </p>
      </div>
    </div>
  );
}

export default First;
