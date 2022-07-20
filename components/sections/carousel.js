import data from "../utils/dataSlider";
import Slider from "../utils/slider";
import styles from "./carousel.module.css";
function Carousel() {
  return (
    <div className={styles.carousel}>
      <Slider data={data} />
    </div>
  );
}

export default Carousel;
