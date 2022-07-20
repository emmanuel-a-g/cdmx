import styles from "./slider.module.css";
import { useState } from "react";
import BtnSlider from "./btnSlider";

function Slider({data}) {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(data.length);
    }
  };
  const myArray = new Array(data.length).fill(0);
  const moveDot = (idx) => {
    setSlideIndex(idx);
  }
  return (
    <div className={styles.containerSlider}>
      {data.map((obj, index) => {
        return (
          <div
            className={
              slideIndex === index + 1
                ? `${styles.slide} ${styles.activeAnim}`
                : styles.slide
            }
            key={obj.id}
          >
            <p className={styles.title}>{obj.title}</p>
            <img
              src={`./slider/${slideIndex}.jpg`}
              alt="random Image"
            />
          </div>
        );
      })}
      <BtnSlider side="left" moveSlide={prevSlide} />
      <BtnSlider side="right" moveSlide={nextSlide} />
      <div className={styles.containerDots}>
        {myArray.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={
                slideIndex === index + 1
                  ? `${styles.dot} ${styles.active}`
                  : styles.dot
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}
export default Slider;