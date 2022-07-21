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
        <title>DAE-Madera: Casa | Taller</title>
      </Head>
      <First />
      <TheSlider />
      <Showroom />
      <Carousel />
      <Subtitulo />
      <HorizontalProducts />
      <Nosotros />
    </>
  );
}

export default HomePage;
