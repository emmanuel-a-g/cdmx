import Head from "next/head";
import ProductoPage from "../components/home/productoPage";
function Productos() {
  return (
    <div>
      <Head>
        <title>DA-Wood: Productos</title>
      </Head>
      <ProductoPage />
    </div>
  );
}

export default Productos;
