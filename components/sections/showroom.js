import styles from "./showroom.module.css";
//two parts
function Showroom() {
  return (
    <div className={styles.showroom}>
      <div className={styles.topLeft}></div>
      <div className={styles.topRight}>
        <h2>CALIDAD</h2>
        <p>El producto se amolda perfectamente a tu tipo de evento.</p>
      </div>
      <div className={styles.bottomLeft}>
        <h2>DISENO</h2>
        <p>Para frutas y sal o quesos.</p>
      </div>
      <div className={styles.bottomRight}></div>
    </div>
  );
}
export default Showroom;
