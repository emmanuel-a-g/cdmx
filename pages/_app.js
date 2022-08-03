import { ContextProvider } from "../components/context/myContext";
import Layout from "../components/layout/layout";
import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon5.png" />
          <meta
            name="description"
            content="DAE Wood Shop located in a corner of Mexico City, offers artisan grade products for decor and daily living."
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
