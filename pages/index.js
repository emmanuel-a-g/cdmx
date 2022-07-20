import Head from "next/head";
import First from "../components/sections/first";
import Showroom from "../components/sections/showroom";
import TheSlider from "../components/sections/theSlider";
import Carousel from "../components/sections/carousel";
import Quote from "../components/layout/quote";
import HorizontalProducts from "../components/utils/horizontalProducts";

function HomePage() {
  return (
    <>
      <Head>
        <title>Garcia: Taller | Creations</title>
      </Head>
      <First />
      <Carousel />
      <TheSlider />
      <Showroom />
      <HorizontalProducts />
    </>
  );
}

export default HomePage;
