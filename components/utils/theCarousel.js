import styles from "./theCarousel.module.css";

function item({children, width}) {
  return (
    <div className={styles.carouselItem} style={{width: width}}>


    </div>
  )
}

function theCarousel() {
  return (
    <div>

    </div>
  )
}
export default theCarousel;