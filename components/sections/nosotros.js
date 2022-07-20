import styles from "./nosotros.module.css";
function Nosotros() {
  return (
    <div className={styles.nostorsWrapper}>
      <div className={styles.space}></div>
      <div className={styles.nosotros}>
        <div className={styles.leftDiv}>
          <h3>GARCIA FAMILY & VALUES: </h3>
          <p>
            Todo se puede hacer si juntos lo hacemos, la tradicion de trabajo en
            conjunto nos une.
          </p>
        </div>
        <div className={styles.rightDiv}></div>
      </div>
      <div className={styles.spaceBottom}></div>
    </div>
  );
}
export default Nosotros;
