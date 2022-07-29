import styles from "./textSlider.module.css";
import { useState, useEffect } from "react";
import SmallBtnSlider from "./smallBtnSlider";

function TextSlider({ data }) {
  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
  }, [slideIndex]);

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
  return (
    <div className={styles.containerSlider}>
      {data.map((quote, index) => {
        return (
          <div
            className={
              slideIndex === index + 1
                ? `${styles.slide} ${styles.activeAnim}`
                : `${styles.slide} ${styles.disactiveAnim} `
            }
            key={index}
          >
            <span className={styles.quote}>{quote}</span>
          </div>
        );
      })}
      <SmallBtnSlider side="left" moveSlide={prevSlide} />
      <SmallBtnSlider side="right" moveSlide={nextSlide} />
    </div>
  );
}

export default TextSlider;
