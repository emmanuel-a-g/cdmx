import Head from "next/head";
import First from "../components/sections/first";
import Showroom from "../components/sections/showroom";
import TheSlider from "../components/sections/theSlider";
import Carousel from "../components/sections/carousel";
import HorizontalProducts from "../components/utils/horizontalProducts";
import Subtitulo from "../components/sections/subtitulo";
import Nosotros from "../components/sections/nosotros";

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
      <Subtitulo />
      <HorizontalProducts />
      <Nosotros />
    </>
  );
}

export default HomePage;
