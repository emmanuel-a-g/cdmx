import Navigation from "./navigation";
import Carousel, { CarouselItem } from "../utils/carousel";
import styles from "./topWrapper.module.css";

function TopWrapper() {
  return (
    <div className={styles.topWrapper}>
      <Navigation />
      <Carousel buttons={false}>
        <CarouselItem>
          <h4>Inspire</h4>
        </CarouselItem>
        <CarouselItem>
          <h4>Dream</h4>
        </CarouselItem>
        <CarouselItem>
          <h4>Innovate</h4>
        </CarouselItem>
        <CarouselItem>
          <h4>Execute</h4>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default TopWrapper;
