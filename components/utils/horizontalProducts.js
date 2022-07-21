import styles from "./horizontalProducts.module.css";
import { useState } from "react";

function HorizontalProducts() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  const showPrice = (number, to) => {
    if (number === "1") {
      setOne(to)
    } else if (number === "2") {
      setTwo(to)
    } else if (number === "3") {
      setThree(to)
    } else if (number === "4") {
      setFour(to)
    }
  };

  return (
    <div className={styles.horizontal}>
      <div
        className={`${styles.card} ${styles.one}`}
        onMouseEnter={() => showPrice("1", true)}
        onMouseLeave={() => showPrice("1", false)}
      >
        <div className={styles.imageDivOne}></div>
        <div className={styles.titulo}>
          Silver y Hecho
          <span className={one ? styles.precioActive : styles.precio}>$900</span>
        </div>
      </div>
      <div
        className={`${styles.card} ${styles.two}`}
        onMouseEnter={() => showPrice("2", true)}
        onMouseLeave={() => showPrice("2", false)}
      >
        <div className={styles.imageDivTwo}></div>
        <div className={styles.titulo}>
          Gold y Madera
          <span className={two ? styles.precioActive : styles.precio}>$1500</span>
        </div>
      </div>
      <div
        className={`${styles.card} ${styles.three}`}
        onMouseEnter={() => showPrice("3", true)}
        onMouseLeave={() => showPrice("3", false)}
      >
        <div className={styles.imageDivThree}></div>
        <div className={styles.titulo}>
          Black y Silver
          <span className={three ? styles.precioActive : styles.precio}>$1000</span>
        </div>
      </div>
      <div
        className={`${styles.card} ${styles.four}`}
        onMouseEnter={() => showPrice("4", true)}
        onMouseLeave={() => showPrice("4", false)}
      >
        <div className={styles.imageDivFour}></div>
        <div className={styles.titulo}>
          Gold y Jolla
          <span className={four ? styles.precioActive : styles.precio}>$2000</span>
        </div>
      </div>
    </div>
  );
}
export default HorizontalProducts;
