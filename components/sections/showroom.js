import styles from "./showroom.module.css";
//two parts
function Showroom() {
  return (
    <div className={styles.showroom}>
      <div className={styles.topLeft}></div>
      <div className={styles.topRight}>
        <h2>ARTE</h2>
        <p>This is the product with citrus on it.</p>
      </div>
      <div className={styles.bottomLeft}>
        <h2>PRECISION</h2>
        <p>This is the product with cheese on it.</p>
      </div>
      <div className={styles.bottomRight}></div>
    </div>
  );
}
export default Showroom;
