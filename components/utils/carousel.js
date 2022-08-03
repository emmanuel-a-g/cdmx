import styles from "./carousel.module.css";
import React from "react";
import { useState, useEffect } from "react";

export function CarouselItem({ children, width }) {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
}
//indicators
// <div className={styles.indicators}>
// {React.Children.map(children, (child, idx) => {
//   return (
//     <button
//       className={`${idx === index ? styles.active : "" }`}
//       onClick={() => updateIndex(idx)}
//     >
//       {idx + 1}
//     </button>
//   );
// })}
// </div>
function Carousel({ children }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
}, [index]);

  const updateIndex = (newIndex) => {
    if (index < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  const prev = () => {
    updateIndex(index - 1);
  };
  const next = () => {
    updateIndex(index + 1);
  };

  //removing indicators
  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <button className={styles.prev} onClick={prev}>
        <img src="./left.png" alt="left arrow" width="16px" height="16px" />
      </button>
      <button className={styles.next} onClick={next}>
        <img src="./right.png" alt="right arrow" width="16px" height="16px" />
      </button>
    </div>
  );
}
//carousel hidden overflow container
//we move div inner to show each item according to place
//#1 item to show: transform: translateX(0%)
//#2 visible, div.inner will have transform: translateX(-100%)
//#3 visible, transform: translateX(-200%)
export default Carousel;
