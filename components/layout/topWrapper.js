import Navigation from "./navigation";
import Carousel, { CarouselItem } from "../utils/carousel";
import styles from "./topWrapper.module.css";

function TopWrapper() {
  return (
    <div className={styles.topWrapper}>
      <Navigation />
      <Carousel>
        <CarouselItem>Inspire</CarouselItem>
        <CarouselItem>Dream</CarouselItem>
        <CarouselItem>Innovate</CarouselItem>
        <CarouselItem>Execute</CarouselItem>
      </Carousel>
    </div>
  );
}

export default TopWrapper;
