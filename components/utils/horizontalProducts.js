import styles from "./horizontalProducts.module.css";
import { useState } from "react";

function HorizontalProducts() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  const showPrice = (number) => {
    if (number === "1") {
      setOne(!one)
    } else if (number === "2") {
      setTwo(!two)
    } else if (number === "3") {
      setThree(!three)
    } else {
      setFour(!four)
    }
  };

  return (
    <div className={styles.horizontal}>
      <div
        className={`${styles.card} ${styles.one}`}
        onMouseEnter={() => showPrice("1")}
      >
        <div className={styles.imageDivOne}></div>
        <div className={styles.titulo}>
          Titulo Silver y Hecho
          <span className={one ? styles.precioActive : styles.precio}>$1000</span>
        </div>
      </div>
      <div
        className={`${styles.card} ${styles.two}`}
        onMouseEnter={() => showPrice("2")}
      >
        <div className={styles.imageDivTwo}></div>
        <div className={styles.titulo}>
          Titulo Gold y Madera
          <span className={two ? styles.precioActive : styles.precio}>$1000</span>
        </div>
      </div>
      <div
        className={`${styles.card} ${styles.three}`}
        onMouseEnter={() => showPrice("3")}
      >
        <div className={styles.imageDivThree}></div>
        <div className={styles.titulo}>
          Titulo Black y Silver
          <span className={three ? styles.precioActive : styles.precio}>$1000</span>
        </div>
      </div>
      <div
        className={`${styles.card} ${styles.four}`}
        onMouseEnter={() => showPrice("4")}
      >
        <div className={styles.imageDivFour}></div>
        <div className={styles.titulo}>
          Titulo Gold y Jolla
          <span className={four ? styles.precioActive : styles.precio}>$1000</span>
        </div>
      </div>
    </div>
  );
}
export default HorizontalProducts;
