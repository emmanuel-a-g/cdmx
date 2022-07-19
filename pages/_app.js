import { ContextProvider } from "../components/context/myContext";
import Layout from "../components/layout/layout";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
