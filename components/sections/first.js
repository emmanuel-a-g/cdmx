import styles from "./first.module.css";
function First() {
  return (
    <div className={styles.first}>
      <div className={styles.center}>
        <h1>DAVID</h1>
        <p className={styles.para}>
         Este es un trabajo de arte hecho en mano desde la Ciudad de Mexico.
        </p>
      </div>
    </div>
  );
}

export default First;
