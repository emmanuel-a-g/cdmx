import styles from "./nosotros.module.css";
function Nosotros() {
  return (
    <div className={styles.nostorsWrapper}>
      <div className={styles.space}></div>
      <div className={styles.nosotros}>
        <div className={styles.leftDiv}>
          <h3>GARCIA FAMILY & VALUES: </h3>
          <p>
            En equipo juntos trabajamos para dar luz a tus ideas y asi
            mantenemos la union fuerte de la familia DAE.
          </p>
        </div>
        <div className={styles.rightDiv}></div>
      </div>
      <div className={styles.spaceBottom}></div>
    </div>
  );
}
export default Nosotros;
