import '../styles/globals.css'
import '../styles/Header.css'
import '../styles/Home.css'
import Layout from './Layout/layout'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
