import styles from "./showroom.module.css";
//two parts
function Showroom() {
  return (
    <div className={styles.showroom}>
      <div className={styles.topLeft}></div>
      <div className={styles.topRight}>
        <p>This is the product with cheese on it</p>
      </div>
      <div className={styles.bottomLeft}>
        <p>This is the product with chile on it</p>
      </div>
      <div className={styles.bottomRight}></div>
    </div>
  );
}
export default Showroom;
