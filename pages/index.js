import Head from "next/head";
import First from "../components/sections/first";
import Showroom from "../components/sections/showroom";
import TheSlider from "../components/sections/theSlider";
import Carousel from "../components/sections/carousel";
import Quote from "../components/sections/quote";

function HomePage() {
  return (
    <>
      <Head>
        <title>Garcia: Taller | Creations</title>
      </Head>
      <Quote />
      <First />
      <Carousel />
      <TheSlider />
      <Showroom />
    </>
  );
}

export default HomePage;
