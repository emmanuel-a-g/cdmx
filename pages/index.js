import Head from "next/head";
import First from "../components/sections/first";
import Showroom from "../components/sections/showroom";
import TheSlider from "../components/sections/theSlider";
import Slider from "../components/utils/slider";
function HomePage() {
  return (
    <>
      <Head>
        <title>Garcia: Taller | Creations</title>
      </Head>
      <First />
      <Slider />
      <TheSlider />
      <Showroom />
    </>
  );
}

export default HomePage;
